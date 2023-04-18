import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import './Restart.css';

function Restart() {
    const dispatch = useDispatch();
    const isRestart = useSelector((state) => state.isRestart);
    const isNamePage = useSelector((state) => state.isNamePage);
    const isPlanetClosed = useSelector((state) => state.isPlanetClosed);
    const userData = useSelector((state) => state.userData);

    // API 개발 요청(사용자 개설일을 0으로 수정)

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
                                dispatch({ type: 'CHANGE_ISPLANETCLOSED', data: !isPlanetClosed });
                                dispatch({ type: 'CHANGE_ISNAMEPAGE', data: !isNamePage });
                                dispatch({ type: 'CHANGE_ISRESTART', data: !isRestart });
                                dispatch({ type: 'CHANGE_LETTERDATA', data: [] });
                                dispatch({ type: 'CHANGE_OPENDATE', data: 0 });
                            }}>만료하기</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
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