import React from 'react'
import { AppWrap, MotionWrap } from '../../wrapper'

import './Education.scss'

const Education = () => {
  return (
    <div>Education</div>
  )
}

export default AppWrap(
  MotionWrap(Education, "app__education"),
  "education",
  "app__primarybg"
);