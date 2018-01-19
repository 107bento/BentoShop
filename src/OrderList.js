import React, { Component } from "react";
import {
  Link,
} from "react-router-dom";
import { ListGroup, ListGroupItem, Collapse, CardBody, Card} from 'reactstrap';
import {API} from "./API";

class OrderList extends React.Component {

  constructor(props){
    super(props);
    this.state={
      display:false,
      orders: {},
    };
    this.displayToggle=this.displayToggle.bind(this);
    this.getShopOrders();
  }

  displayToggle(){
    this.setState({
      display:!this.state.display,
    });
  }

  getShopOrders() {
    API.getShopOrders().then((res) => {
      if (res.statusCode == 200) {
        // TODO
        // console.log(res.data);
        this.setState({
          orders: res.data
        });
        // console.log(this.state.orders);
      } else if (res.statusCode == 401) {
        alert('請重新登入');
        window.location.replace("/login");
      } else {
        alert(res.errorMessages);
        console.log(res.errorMessages);
      }
    }).catch((error) => {
      alert(error);
    });
  }

  render() {
    const orders = this.state.orders;
    return (
    <div className="mx-auto" style={{maxWidth: '45rem'}}>
      <ul>
        {Object.keys(orders).forEach((key, i) => {
          console.log('order:', orders[key].date);
          return (<li>{orders[key].date}</li>);
          })
        }

        {/* <Link to="orders/2018-01-06"><li>2018-01-06</li></Link> */}
      </ul>
      {/* <h4 onClick={this.displayToggle}><span className="badge badge-warning">2017</span></h4>
        <Collapse isOpen={this.state.display}>
        <ListGroup>
          <ListGroupItem>1月</ListGroupItem>
          <ListGroupItem>2月</ListGroupItem>
          <ListGroupItem>3月</ListGroupItem>
          <ListGroupItem>4月</ListGroupItem>
          <ListGroupItem>5月</ListGroupItem>
          <ListGroupItem>6月</ListGroupItem>
          <ListGroupItem>7月</ListGroupItem>
          <ListGroupItem>8月</ListGroupItem>
          <ListGroupItem>9月</ListGroupItem>
        </ListGroup>
        </Collapse> */}
    </div>
    );
  }
}
 
export default OrderList
