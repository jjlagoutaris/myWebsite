import React from 'react'

// eslint-disable-next-line no-unused-vars
import { About, Footer, Header, Skills, Creations } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Creations />
      <Skills />
      <Footer />
    </div>
  )
}

export default App;