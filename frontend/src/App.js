import React from 'react'

import { About, Footer, Header, Skills, Testimonials, Creations, Education } from './container';
import { Navbar } from './components';
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Creations />
      <Skills />
      <Testimonials />
      <Education />
      <Footer />
    </div>
  )
}

export default App