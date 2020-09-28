import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import '../components/styles/Navbar.css'



const Navbar = (props) => {
    const [ click, setClick ] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    
  return(
    <>
     <nav className='navbar shadow-sm'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink to='/' className='nav-links' activeClassName="is-active" onClick={closeMobileMenu} exact={true}>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/about'
                className='nav-links' activeClassName="is-active"
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/projects'
                className='nav-links' activeClassName="is-active"
                onClick={closeMobileMenu}
              >
                projects
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/skills'
                className='nav-links' activeClassName="is-active"
                onClick={closeMobileMenu}
              >
                skills
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/contact'
                className='nav-links' activeClassName="is-active"
                onClick={closeMobileMenu}
              >
                contacts
              </NavLink>
            </li>

            
          </ul>
          
        </div>
      </nav>
    </>
   )

 }

export default Navbar


