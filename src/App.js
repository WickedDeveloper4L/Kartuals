import './App.css';
import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out';
import { auth, createUserProfileDocument } from './components/firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state ={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
        
      }
      this.setState({currentUser: userAuth}); 
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
    render(){
      return(
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signIn' component={SignInSignOutPage} />
      </Switch>
      
      </div>
    )
    }
  
}

export default App;
