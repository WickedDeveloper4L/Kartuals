import React from 'react'
import './header.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'

const Header = () => {
  return (
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className="options">
        <Link to="/shop" className='option'>
            <h3 className="link">SHOP</h3>
        </Link>
        <Link to="/shop" className='option'>
            <h3 className="link">CONTACT</h3>
        </Link>
        
        </div>
    </div>
  )
}

export default Header