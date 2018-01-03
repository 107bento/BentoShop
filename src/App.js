import React, { Component } from 'react';
import {
  Route,
  BrowserRouter,
  Switch,
} from "react-router-dom";

import LoginContainer from "./LoginContainer";
import DefaultContainer from "./DefaultContainer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginContainer}/>
          <Route component={DefaultContainer}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
