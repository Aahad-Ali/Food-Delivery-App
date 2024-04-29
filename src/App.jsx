import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from '../src/components/screens/Home'
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <Router>

        <Routes>
          <Routes exact path="/" element={<Home />}></Routes>

        </Routes>
      </Router>
    </>
  )
}

export default App
