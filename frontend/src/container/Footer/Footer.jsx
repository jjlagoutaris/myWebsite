import React from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {

  return (
    <>
      <h2 className="head-text">Get in touch!</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:jjlagoutaris@gmail.com" className="p-text p-text-formal">jjlagoutaris@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (508) 733-5214" className="p-text p-text-formal">+1 (508) 733-5214</a>
        </div>
        <div className="app__footer-card">
          <img src={images.linkedin} alt="linkedin" />
          <a href="https://www.linkedin.com/in/john-lagoutaris-a67ba0224/" className="p-text p-text-formal">My LinkedIn</a>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg',
);