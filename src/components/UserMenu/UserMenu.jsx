import React from 'react';
import { Link } from 'react-router-dom';

import './UserMenu.css';

export const UserMenu = () => {
  return (
    <div className="user__menu__container">
      <div className="user__menu__item__block">
        <div className="user__menu__item">
          <Link to="/tickets" className="menu__item__link">
            My tickets
          </Link>
        </div>
        <div className="user__menu__item">
          <Link to="/profile" className="menu__item__link">
            Profile
          </Link>
        </div>
        <div className="user__menu__item">
          <Link to="/about" className="menu__item__link">
            About cinema
          </Link>
        </div>
      </div>
    </div>
  );
};
