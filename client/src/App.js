import React, { Component } from 'react';
import HomePage from './components/public/HomePage';
import Shop from './components/public/Shop';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './style/main.scss';
import Checkout from "./components/public/Checkout";
import Admin from './components/admin/Admin';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route  path="/shop" component={Shop}/>
            <Route exact path="/checkout" component={Checkout}/>
            <Route  path="/admin" component={Admin}/>
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
