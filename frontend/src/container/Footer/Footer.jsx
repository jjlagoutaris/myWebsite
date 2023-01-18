import React from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {

  return (
    <>
      <h2 className="head-text">Get in touch!</h2>

      <div className="app__footer-cards">

        <a href="mailto:jjlagoutaris@gmail.com">
          <div className="app__footer-card ">
            <img src={images.email} alt="email" />
            <div className="p-text p-text-formal">jjlagoutaris@gmail.com</div>
          </div>
        </a>

        <a href="tel:+1 (508) 733-5214">
          <div className="app__footer-card">
            <img src={images.mobile} alt="phone" />
            <div className="p-text p-text-formal">+1 (508) 733-5214</div>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/john-lagoutaris-a67ba0224/" target="_blank" rel="noreferrer">
          <div className="app__footer-card">
            <img src={images.linkedin} alt="linkedin" />
            <div className="p-text p-text-formal">My LinkedIn</div>
          </div>
        </a>

      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg',
);