import './App.css';
import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import Checkout from './pages/checkout/Checkout';
import SignInSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out';
import { checkUserSession } from './redux/user/user.actions';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount(){
     const {checkUserSession} = this.props

     checkUserSession() 
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
    render(){
      const {currentUser} = this.props
      
      return(
      <div>
      <Header/>
      <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route exact path='/checkout' component={Checkout}/>
          <Route exact path='/signIn' render={()=> currentUser ? (<Redirect to='/'/>) : (<SignInSignOutPage/>)} />
      </Switch>
      
      </div>
    )
    }
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch =>({
  checkUserSession: ()=> dispatch(checkUserSession())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
