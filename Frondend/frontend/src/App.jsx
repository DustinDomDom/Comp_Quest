import { Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Build from './pages/build'
import Question from './pages/Question'
import Errornotif from './components/errornotif'
import Login from './pages/login'
import React from 'react'

function App() {

  return (
    <main>
      <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Build" element={<Build />} />
          <Route path='/FAQ' element={<Question />} />
          <Route path='/Error404' element={<Errornotif />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      <Footer />
    </main> 
  )
}

export default App
