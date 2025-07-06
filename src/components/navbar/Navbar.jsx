import React from 'react'
import { IoIosAppstore, IoIosNotifications } from 'react-icons/io'
import './navbar.css'
import { BiAlarm, BiLogoPlayStore } from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbarLogo">
            {/* <h1 className='navbarLogoText'>CAT</h1> */}
            <img src='/assets/cat.png' alt='cat' />
            <h1>Employee Portal</h1>
        </div>
        <div className="navbarIcons">
            <div className='navbarIcon'>
                <IoIosNotifications size={25} />
            </div>
            <div className='navbarIcon'>
                <IoIosAppstore size={25} />
            </div>
            <div className='navbarIcon'>
                <BiAlarm size={25} />
            </div>
        </div>
    </div>
  )
}

export default Navbar
