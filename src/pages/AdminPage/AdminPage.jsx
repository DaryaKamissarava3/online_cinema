import React from 'react';
import { Link } from 'react-router-dom';

import './AdminPage.css';
import {Header} from "../../components/SharedComponents/Header";

export const AdminPage = () => (
  <div className="admin__page__container">
    <Header />
    <h1 className="admin__page__title">Admin Page</h1>
    <div className="admin__page__item__block">
      <div className="admin__page__item">
        <Link to="/admin/add-films" className="item__link">
          Add films
        </Link>
      </div>
      <div className="admin__page__item">
        <Link to="/admin/view-users" className="item__link">
          View all users
        </Link>
      </div>
      <div className="admin__page__item">
        <Link to="/admin/films" className="item__link">
          Films list
        </Link>
      </div>
    </div>
  </div>
);
