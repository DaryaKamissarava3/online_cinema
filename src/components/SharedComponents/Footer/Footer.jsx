import React from 'react';

import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__block">
        <h2 className="footer__block__title">Poster</h2>
        <div className="footer__block__item">Now in the cinema</div>
        <div className="footer__block__item">For children</div>
      </div>
      <div className="footer__block">
        <h2 className="footer__block__title">Cinema</h2>
        <div className="footer__block__item">News</div>
        <div className="footer__block__item">Vacancies</div>
        <div className="footer__block__item">Contacts</div>
      </div>
      <div className="footer__block">
        <h2 className="footer__block__title">Info</h2>
        <div className="footer__block__item">Rules</div>
        <div className="footer__block__item">Addresses</div>
        <div className="footer__block__item">Privacy</div>
      </div>
    </footer>
  );
};
