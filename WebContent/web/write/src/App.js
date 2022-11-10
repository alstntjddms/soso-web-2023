import React, { useCallback, useEffect } from 'react';
// import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  const userID = useSelector((state) => state.userID);
  const dispatch = useDispatch();

  // request_userData from fetch
  function request_userData(userid) {
    console.log(userid);
  };

  // ?userID=userID
  const get_query = useCallback(() => {
    const url = document.location.href;
    const qs = url.substring(url.indexOf('?') + 1).split('&');
    const result = {};
    for (let i = 0; i < qs.length; i++) {
      qs[i] = qs[i].split('='); result[qs[i][0]] = decodeURIComponent(qs[i][1]);
    };
    console.log(result.userID);
    if (result.userID !== undefined) {
      dispatch({ type: 'ADD_USERID', data: result.userID });
      request_userData(result.userID);
    } else {
      dispatch({ type: 'ADD_USERID', data: 'userID가 없습니다.' });
    };
  }, [dispatch]);

  useEffect(() => {
    get_query();
  }, [get_query]);

  return (
    <React.Fragment>
      <h6>{userID}</h6>
    </React.Fragment>
  );
}

export default App;
