import './App.scss';
import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import Checkout from './pages/checkout/Checkout';
import SignInSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out';
import { checkUserSession } from './redux/user/user.actions';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';


const App =()=>{

  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch()

  React.useEffect(()=>{
    dispatch(checkUserSession())

  }, [dispatch])
 
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
export default App;
