import React, { Component } from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import Order from "./Order";
import OrderList from "./OrderList";

class Orders extends React.Component {

  render() {
    return (
    <div>
      <Route path={`/orders/:orderDate`} component={Order}/>
      <Route exact path="/orders" component={OrderList}/>
    </div>
    );
  }
}
 
export default Orders
