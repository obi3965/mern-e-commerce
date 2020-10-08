import React, {useState} from 'react'
import { withRouter, NavLink } from "react-router-dom";
import { signout, isAuthenticated } from '../auth';
import '../core/styles/menu.css'
/**
* @author
* @function Menu
**/

const Menu = ({ history }) => {
    const [ click, setClick ] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
  return(
   
  <>
   <nav className='navbar shadow-sm'>
        <div className='navbar-container'>
          <NavLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
            PORTFOLIO
            <i className='fab fa-typo3' />
          </NavLink>
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
            
            <li className='nav-item'>
              <NavLink className="btn btn-outline"
              to='/signin'
              
              onClick={closeMobileMenu} > 
                 sign in
              </NavLink>
              </li>

              <li className='nav-item'>
              <NavLink className="btn btn-outline"
              to='/signup'
              onClick={closeMobileMenu} 
              > 
                 sign up
              </NavLink>
            </li>
            {isAuthenticated() && (
            <li className='nav-item'>
              <NavLink className="btn btn-outline"
              to='/signout'
              onClick={()=> signout(() =>{
                history.push('/')
            })}
              > 
                 sign out
              </NavLink>
            </li>
            )}
          </ul>
          
        </div>
        
      </nav>
  
  </>
    
   )

 }

export default withRouter(Menu)