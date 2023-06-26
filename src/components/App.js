import React, {useEffect} from 'react';
import {BrowserRouter, Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import {Login} from '../pages/Login';
import {Registration} from '../pages/Registration';
import {MainPage} from '../pages/MainPage';
import {authStatuses} from '../constants/authStatuses';
import {useSelector} from 'react-redux';
import {Navigation} from './Navigation';

function App() {
  const loggedOut = useSelector((state) => state.auth.status !== authStatuses.loggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedOut) {
      navigate("/login");
    }
  }, [loggedOut])

  return (

      <div className="app">
        <Navigation />
        <div className="wrap">

          {loggedOut ?
            <Routes>
              <Route path="/registration" element={<Registration/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="*" element={<Navigate to="/login" replace={true}/>}/>
            </Routes>
            :
            <Routes>
              <Route path="/" element={<MainPage />}/>
              <Route path="*" element={<Navigate to="/" replace={true}/>}/>
            </Routes>
          }
        </div>
      </div>
  );
}

export default App;

