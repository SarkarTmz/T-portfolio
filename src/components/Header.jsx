import React from 'react'
import '../styles/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className="header container mt-8">
        <div className="header__wrapper flex flex-wrap justify-between">
          <h1 className='text-white'>Logo</h1>
          <ul className='flex flex-wrap gap-8'>
            <Link to="/" >Home</Link>
            <Link to="about" >About</Link>
            <Link to="project" >Projects</Link>
            <Link to="contact" >Contacts</Link>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header