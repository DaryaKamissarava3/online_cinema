import React, {useState} from 'react';


import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import {logoutUser} from '../../../store/actions/authActions';

import './Header.css';
import {Input} from "../Input";
import {Button} from "../Button";

export const Header = ({updateClassStatus, updateDataSearch}) => {
  const [searchValue, setSearchValue] = useState('');

  const films = useSelector((state) => state.film.films);
  const loggedIn = useSelector((state) => state.auth.isLoggedIn === true);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleInput = (event) => {
    setSearchValue(event.target.value);
  };

  const findMatchesInArray = (value) => {
    const string = value.toString().toLowerCase();
    return films.filter((item) => item.title.toLowerCase().includes(string));
  };

  const handleSearch = () => {
    const res = findMatchesInArray(searchValue);
    if (res.length === 0) {
      alert('No films found');
      return;
    }
    updateClassStatus((prevState) => !prevState);
    updateDataSearch(res);
  };

  return (
    <div className="header__container">
      <nav className="header__navigation">
        <div className="nav__block">
          <Link className="main__logo__link" to="/">
            <h1 className="header__logo">LOGO</h1>
          </Link>
        </div>
        <div className="nav__block">
          <Input
            type="text"
            className="search__input"
            placeholder="Search films"
            onChangeEvent={handleInput}
          />
          <Button
            clickFunction={handleSearch}
            className="navbar__btn"
            btnText="Search"
          />
          <span className="nav__block__item">
          {loggedIn &&
            <Button
              clickFunction={handleLogout}
              className="navbar__btn"
              btnText="Sign Out"
            />
          }
        </span>
        </div>
      </nav>
    </div>
  );
};
