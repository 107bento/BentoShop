import React, { Component } from "react";
import {
    Link,
} from "react-router-dom";
class OrderList extends React.Component {

  render() {
    return (
    <div className="mx-auto" style={{maxWidth: '75%'}}> 
        <ul>
            <Link to="orders/2018-01-06"><li>2018-01-06</li></Link>
        </ul>
    </div>
    );
  }
}
 
export default OrderList