import { Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Build from './pages/build'
import Question from './pages/Question'
import Errornotif from './components/errornotif'

function App() {

  return (
    <main>
      <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Build" element={<Build />} />
          <Route path='/FAQ' element={<Question />} />
          <Route path='/Error404' element={<Errornotif />} />
        </Routes>
      <Footer />
    </main> 
  )
}

export default App
