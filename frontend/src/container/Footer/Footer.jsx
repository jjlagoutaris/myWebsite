import React from 'react'
import { AppWrap, MotionWrap } from '../../wrapper';

import './Footer.scss'

const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);