import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {authStatuses} from '../../constants/authStatuses';
import './Navigation.css';
import {Button} from "@mui/material";

export const Navigation = () => {
  const isAuth = useSelector((state) => state.auth.status === authStatuses.loggedIn)

  return (
    <div className=" navigation__container">
      <div className="navigation">
        {!isAuth &&
          <Button variant="outlined" className="nav__btn">
            <Link to="/login" className="nav-login">Sign in</Link>
          </Button>
        }
        {!isAuth &&
          <Button variant="outlined" className="nav__btn">
            <Link to="/registration" className="nav-registration">Registration</Link>
          </Button>
        }
      </div>
    </div>
  );
};
