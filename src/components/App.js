import React, {useEffect} from 'react';
import { Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {authStatuses} from '../constants/authStatuses';

import {Navigation} from './Navigation';
import {AdminPage} from '../pages/AdminPage';
import {Login} from '../pages/Login';
import {Registration} from '../pages/Registration';
import {MainPage} from '../pages/MainPage';
import {AddFilms} from "./AddFilms/AddFilms";
import {ViewUsers} from "./ViewUsers";

function App() {
  const loggedOut = useSelector((state) => state.auth.status !== authStatuses.loggedIn);
  const userRole = useSelector((state) => state.user.role);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedOut) {
      navigate("/login");
    }
  }, [loggedOut])

  return (

    <div className="app">
      <Navigation/>
      <div className="wrap">
        <Routes>
          {loggedOut ? (
            <>
              <Route path="/registration" element={<Registration/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="*" element={<Navigate to="/login" replace={true}/>}/>
            </>
          ) : userRole === 'admin' ? (
            <>
              <Route path="/" element={<Navigate to="/admin" replace={true}/>}/>
              <Route path="/admin" element={<AdminPage/>}/>
              <Route path="/admin/add-films" element={<AddFilms/>}/>
              <Route path="/admin/view-users" element={<ViewUsers/>}/>
            </>
          ) : (
            <>
              <Route path="/" element={<MainPage/>}/>
              <Route path="*" element={<Navigate to="/" replace={true}/>}/>
            </>
          )}
        </Routes>
      </div>
    </div>
  );
}

export default App;

