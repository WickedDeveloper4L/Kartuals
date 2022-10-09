import './App.css';
import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import Checkout from './pages/checkout/Checkout';
import SignInSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out';
import { auth, createUserProfileDocument} from './components/firebase/firebase.utils';
import {connect} from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions';
import {createStructuredSelector} from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors';
class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount(){
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
        })
        
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
    render(){
      return(
      <div>
      <Header/>
      <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route exact path='/checkout' component={Checkout}/>
          <Route exact path='/signIn' render={()=> this.props.currentUser ? (<Redirect to='/'/>) : (<SignInSignOutPage/>)} />
      </Switch>
      
      </div>
    )
    }
  
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProp = dispatch =>({
  setCurrentUser: user=>dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProp)(App);
