import './App.css';
import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';

function App() {
  return(
    <div>
    <Header/>
    <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
    </Switch>
    
    </div>
  )
}

export default App;
