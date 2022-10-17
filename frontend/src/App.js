import React from 'react'

// eslint-disable-next-line no-unused-vars
import { About, Footer, Header, Skills, Creations, Education } from './container';
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
      {/* <Testimonials /> */}
      <Education />
      <Footer />
    </div>
  )
}

export default App