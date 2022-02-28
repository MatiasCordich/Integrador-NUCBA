import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'
import { useDispatch } from 'react-redux'
import { logoutAction } from '../../redux/auth';

const Navbar = () => {

  const dispatch = useDispatch()

  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  const onLogOut = () => {
      dispatch(logoutAction())
  }

  return(
    <header className='header'>
        <div className='header__content'>
          <div className='header__content-logo'>
            <h2 className='header__content-logo-name' >
            <img className='icon' src="https://img.icons8.com/external-wanicon-lineal-wanicon/50/fafafa/external-live-news-communication-wanicon-lineal-wanicon.png" alt='news-icon'/>News Api
            </h2>
          </div>
          <div className='header__content-btnopen'>
            <button onClick={handleToggle} className={navbarOpen ? 'open' : 'close'}>
              <i className="fas fa-bars" ></i>
            </button>  
          </div>
        </div>
        <nav className={`${navbarOpen ? 'navbar' : 'disabled'}`}>
          <div className='navbar__close-btn'>
            <i className="fas fa-times"></i>
          </div>
          <ul className={` ${navbarOpen ? 'navbar__links' : "disabled"}`}>
            <li className='navbar__links-link'>
              <NavLink to='/home' onClick={closeMenu}>Home</NavLink>
            </li>
            <li className='navbar__links-link'>
              <NavLink to='/about' onClick={closeMenu}>About</NavLink>
            </li>
            <li className='navbar__links-link'>
              <NavLink to='/news' onClick={closeMenu}>News</NavLink>
            </li>
            <li className='navbar__links-btn'>
              <NavLink className='btn-login' to='/login' onClick={closeMenu}>Log in</NavLink> |
              <button onClick={onLogOut} className='btn-logout'>Log Out</button>
            </li>
            <li className='navbar__links-btn'>
              <NavLink className='btn-register' to='/register' onClick={closeMenu}>Register</NavLink>
            </li>
          </ul>
        </nav>
    </header>
  );
};

export default Navbar