import React from 'react'
import { Link } from 'react-router-dom'

function Index() {
  return (
    <>
      <nav className='flex justify-center px-[50px] py-[20px] sticky top-0'>
        <h2 className='text-[#38bdf8]'>MyPortfolio</h2>
        <div>
          <Link to="/home">Home</Link>        
          <Link to="/about">About</Link>        
          <Link to="/skills">Skills</Link>        
          <Link to="/projects">Projects</Link>        
          <Link to="/contact">Contact</Link>        
          </div>
      </nav>

      {/* Hero Section Start */}
      <div className="hero">
        <h1>Hi, I'm <span>Developer</span></h1>
      </div>
    </>
  )
}

export default Index