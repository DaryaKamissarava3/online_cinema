import React from 'react';

import { Footer } from '../../components/SharedComponents/Footer';

import './About.css';

export const About = () => {
  return (
    <>
      <div className="about__block__container">
        <h1 className="about__block__title">About cinema</h1>
        <p className="about__block__text">
          SKYLINE Cinema is a new chain of cinemas with unique technical solutions,
          atmospheric space, trendy design and exceptional service.
          The cinema space occupies more than 3,500 m2 in the Galileo shopping center.
          There are 7 cinema halls of different capacities on three tiers.
          The English architectural firm Chapman Taylor is responsible for the design,
          creating interiors for cinemas in Dubai (the famous multiplex in Dubai Mall),
          London, Hamburg and Madrid. There has never been anything like it in Belarus,
          both in terms of the visual concept and the level of finish and decor.
          The ideal 4K image is provided thanks to the ultra-modern laser projectors
          of the fourth series BARCO SP4K and SP2K made in Belgium. Surround multi-channel
          sound is reproduced by high-quality MAG AUDIO acoustic systems and American QSC
          cinema processors. Silver screens from the industry leader - Galaite Prism give
          you the opportunity to enjoy the depth of colors from anywhere in the room.
          All this makes our cinemas one of the most high-tech in Belarus!
        </p>
        <h2 className="benefits__title">Our benefits</h2>
        <div className="about__block_benefits">
          <div className="benefits__block">
            <div className="benefits__block__item">
              There is a VR space on the 1st floor of the cinema where visitors can play video games
            </div>
            <div className="benefits__block__item">
              Advanced cinema technology in Dolby Atmos sound
            </div>
            <div className="benefits__block__item">
              The atmospheric design of the new cinema was
              developed by the English company Chapman Taylor
            </div>
          </div>
          <div className="benefits__block">
            <div className="benefits__block__item">
              Market with unique movie snacks
            </div>
            <div className="benefits__block__item">
              Convenient location in the center of Minsk
            </div>
            <div className="benefits__block__item">
              Atmospheric lounge-zone and panoramic SKYLINE BAR
              with a view of the Minsk Gates and the station square
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
