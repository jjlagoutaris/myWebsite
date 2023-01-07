import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { images } from '../constants';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/jjlagoutaris" target="_blank" rel="noreferrer"><BsGithub /></a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/john-lagoutaris-a67ba0224/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
    </div>
    <div>
      <a href="https://boardgamegeek.com/user/TheOriginalNihilist" target="_blank" rel="noreferrer"><img src={images.bgg} className="bgg" alt="BoardGameGeek logo"></img></a>
    </div>
  </div>
);

export default SocialMedia;