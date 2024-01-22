import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Layout from './layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Layout/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='project' element={<Projects/>} />
          <Route path='contact' element={<Contact/>} />
        </Routes>
    </>
  )
}

export default App

