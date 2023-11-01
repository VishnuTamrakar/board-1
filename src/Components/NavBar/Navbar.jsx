import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
        
        <div className="img">
         <img src="/img/navlogo.png" alt="" />

        </div>
        <div className='rightC'>
        <div className='department'>
        <h2 className='text'>department marketing</h2>
        </div>

        <div className='profile'>
            <img src="/img/profile.svg" className='icon' alt="" />
            <h2 className='PText'>Nitin</h2>

        </div>
        </div>
        

        
    </div>
  )
}

export default Navbar
