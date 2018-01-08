import React, { Component } from 'react';
import {
  Route,
  Switch,
} from "react-router-dom";

import Today from "./Today";
import Orders from "./Orders";
import Profile from "./Profile";
import Menu from "./Menu";
import Bar from "./Bar";

class DefaultContainer extends Component {
  render() {
    return (
      <div className="">
        <Bar> </Bar>

        <div className="container mx-auto">
          <Switch>
            <Route exact path="/" component={Today}/>
            <Route path="/orders" component={Orders}/>
            <Route path="/menu" component={Menu}/>
            <Route path="/profile" component={Profile}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default DefaultContainer;
