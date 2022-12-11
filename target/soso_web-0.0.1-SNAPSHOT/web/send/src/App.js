import React from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Main from './component/Main';

function App() {
  const navigater = useNavigate();
  const dispatch = useDispatch();

  const store = useSelector((state) => state.store);
  // dispatch({ type: 'CHANGE_STORE', data: 'ture' });

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/*" element={<Main />}></Route>
        {/* <Route path="/login" element={<Login />}></Route>
        <Route path="/redirect" element={<Redirect />}></Route>
        <Route path="/redirect2" element={<Redirect2 />}></Route> */}
      </Routes>
    </React.Fragment>

  );
}

export default App;
