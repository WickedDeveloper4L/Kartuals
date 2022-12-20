import React from 'react'
import './header.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { connect } from 'react-redux/es/exports'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { signOutStart } from '../../redux/user/user.actions'

const Header = ({currentUser, hidden, signOutStart}) => {
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
            <div className='option' onClick={signOutStart}>SIGN OUT</div>
            :
            <Link className='option' to='/signIn'>SIGN IN</Link>
        }
        <CartIcon/>
        </div>
        {hidden? null : <CartDropdown/>}
    </div>
  )
}
    const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  })
  const mapDispatchToProps = dispatch =>({
    signOutStart: ()=>dispatch(signOutStart())
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Header)