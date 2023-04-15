import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import './Refresh.css';

// ReauestLetterDataArray 함수에 userID 추가(하드코딩 수정)

function Refresh() {
    const dispatch = useDispatch();
    const navigater = useNavigate();
    // const userID = useSelector((state) => state.userID);
    const [refresh, setRefresh] = useState(false);

    // 받은 편지 배열 요청 기능
    function RequestLetterDataArray() {
        fetch(`${process.env.REACT_APP_LETTER_ARRAY}pEMui3Dz3Pj1eCaIqVj8zgMSJSM3DMSJSM3D`, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error();
                };
                return res.json();
            })
            .then((data) => {
                if (data.length > 37) {
                    for (let i = 0; data.length - 36; i++) {
                        data.pop();
                    };
                    dispatch({ type: 'CHANGE_LETTERDATA', data: data });
                } else {
                    dispatch({ type: 'CHANGE_LETTERDATA', data: data });
                };
            })
            .catch((error) => {
                alert('정상적으로 사용자 편지 정보를 받아오지 못했습니다. 다시 시도해주세요.');
                dispatch({ type: 'CHANGE_USERID', data: null });
                navigater('/login');
            });
    };

    return (
        <React.Fragment>
            <div className={refresh ? "refresh_active" : "refresh"} onClick={() => {
                setRefresh(!refresh);
                setTimeout(() => {
                    setRefresh(!refresh);
                    dispatch({ type: 'CHANGE_LETTERDATA', data: [] });
                    RequestLetterDataArray();
                }, 2000);
            }}></div>
        </React.Fragment>
    );
};

export default Refresh;