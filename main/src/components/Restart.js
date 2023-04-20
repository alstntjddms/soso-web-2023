import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import './Restart.css';

function Restart() {
    const dispatch = useDispatch();
    const isNamePage = useSelector((state) => state.isNamePage);
    const isPlanetClosed = useSelector((state) => state.isPlanetClosed);
    const userData = useSelector((state) => state.userData);
    const userID = useSelector((state) => state.userID);

    // (팝업) 행성 만료
    function PlanetClosedConfirm() {
        return (
            <React.Fragment>
                <div className={isPlanetClosed ? "isPlanetClosedConfirm" : "isPlanetClosedConfirm_fade"}>
                    <div className='isPlanetClosedConfirm_outContainer'>
                        <p className='isPlanetClosedConfirm_title'>{userData.nickname} 행성을</p>
                        <p className='isPlanetClosedConfirm_title'>만료시키겠습니까?</p>
                        <p className='isPlanetClosedConfirm_p'>행성이 만료되면</p>
                        <p className='isPlanetClosedConfirm_p'>받았던 편지도 모두 삭제되요.</p>
                        <div className='isPlanetClosedConfirm_innerBox'>
                            <div className='isPlanetClosedConfirm_button_signOut' onClick={() => {
                                dispatch({ type: 'CHANGE_ISPLANETCLOSED', data: !isPlanetClosed });
                            }}>취소</div>
                            <div className='isPlanetClosedConfirm_button_cancel' onClick={() => {
                                ResetUserOpenDate();
                            }}>만료하기</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    // 행성 만료 기능
    async function ResetUserOpenDate() {
        await fetch(`${process.env.REACT_APP_RESET_OPENDATE}`, {
            method: 'PATCH',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(String(userID))
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error();
                };
                dispatch({ type: 'CHANGE_ISPLANETCLOSED', data: !isPlanetClosed });
                dispatch({ type: 'CHANGE_ISNAMEPAGE', data: !isNamePage });
                dispatch({ type: 'CHANGE_ISRESTART', data: false });
                dispatch({ type: 'CHANGE_LETTERDATA', data: [] });
                dispatch({ type: 'CHANGE_OPENDATE', data: Number(875286000000) });
            })
            .catch((error) => {
                alert('서버가 불안정 하여 행성 만료에 실패했습니다. 다시 시도해주세요.');
            })
    };

    return (
        <React.Fragment>
            <div className="restart_btn" onClick={() => {
                dispatch({ type: 'CHANGE_ISPLANETCLOSED', data: !isPlanetClosed });
            }}>새 행성 개설하기</div>
            <PlanetClosedConfirm></PlanetClosedConfirm>
        </React.Fragment>
    );
};

export default Restart;