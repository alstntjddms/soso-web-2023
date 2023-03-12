import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import './Refresh.css';

function Refresh() {
    const dispatch = useDispatch();
    const [refresh, setRefresh] = useState(false);
    return (
        <React.Fragment>
            <div className={refresh ? "refresh_active" : "refresh"} onClick={() => {
                setRefresh(!refresh);
                setTimeout(() => {
                    setRefresh(!refresh);
                    dispatch({ type: 'CHANGE_LETTERDATA', data: [] });
                }, 2000);
            }}></div>
        </React.Fragment>
    );
};

export default Refresh;