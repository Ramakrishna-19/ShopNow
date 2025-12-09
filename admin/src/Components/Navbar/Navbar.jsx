import React from 'react'
import './Navbar.css'
import adminpanel_logo from '../../assets/adminpanel_logo.png'
import profile_icon from '../../assets/me.jpg'
import nav_dropdown from '../../assets/dropdown.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={adminpanel_logo} alt="" className="nav-logo" />
        <div>
            <img src={profile_icon} alt="" className='profile_icon'/>
            <img src={nav_dropdown} className='nav_dropdown' alt="" />
        </div>
    </div>
  )
}

export default Navbar
