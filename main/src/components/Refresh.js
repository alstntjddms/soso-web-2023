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
        fetch('https://plater.kr/api/letter/userid/pEMui3Dz3Pj1eCaIqVj8zgMSJSM3DMSJSM3D', {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then((data) => {
                dispatch({ type: 'CHANGE_LETTERDATA', data: data });
            })
            .catch((error)=>{
                console.log(error);
                alert('정상적으로 사용자 데이터를 응답 받지 못했습니다. 다시 로그인 해주세요.');
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