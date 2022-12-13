import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import './Restart.css';

function Restart() {
    const dispatch = useDispatch();

    const isRestart = useSelector((state) => state.isRestart);
    const isNamePage = useSelector((state) => state.isNamePage);

    return (
        <React.Fragment>
            <div className="restart_btn" onClick={() => {
                if (window.confirm('새 행성을 만들까요? (기존의 데이터가 모두 삭제됩니다.)')) {
                    dispatch({ type: 'CHANGE_ISNAMEPAGE', data: !isNamePage });
                    dispatch({ type: 'CHANGE_ISRESTART', data: !isRestart });
                    dispatch({ type: 'CHANGE_LETTERDATA', data: [] });
                    dispatch({ type: 'CHANGE_OPENDATE', data: 0 });
                };
            }}><img alt="plus" src="https://cdn-icons-png.flaticon.com/512/1828/1828819.png"></img>새 행성 만들기</div>
        </React.Fragment>
    );
};

export default Restart;