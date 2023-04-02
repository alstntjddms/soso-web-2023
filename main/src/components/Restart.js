import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import './Restart.css';

function Restart() {
    const dispatch = useDispatch();
    const isRestart = useSelector((state) => state.isRestart);
    const isNamePage = useSelector((state) => state.isNamePage);

    // API 개발 요청(사용자 개설일을 0으로 수정)

    return (
        <React.Fragment>
            <div className="restart_btn" onClick={() => {
                if (window.confirm('새 행성을 만들까요? (기존의 데이터가 모두 삭제됩니다.)')) {
                    dispatch({ type: 'CHANGE_ISNAMEPAGE', data: !isNamePage });
                    dispatch({ type: 'CHANGE_ISRESTART', data: !isRestart });
                    dispatch({ type: 'CHANGE_LETTERDATA', data: [] });
                    dispatch({ type: 'CHANGE_OPENDATE', data: 0 });
                };
            }}>새 행성 개설하기</div>
        </React.Fragment>
    );
};

export default Restart;