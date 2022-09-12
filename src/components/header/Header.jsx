import React from 'react'
import './header.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../firebase/firebase.utils'
import { connect } from 'react-redux/es/exports'
const Header = ({currentUser}) => {
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
        {currentUser ?
            <div className='option' onClick={()=> {auth.signOut()}}>SIGN OUT</div>
            :
            <Link className='option' to='/signIn'>SIGN IN</Link>
        }
        </div>
    </div>
  )
}
    const mapStateToProps = state =>({
    currentUser: state.user.currentUser
  })
  
  export default connect(mapStateToProps)(Header)