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
      orders: [],
    };
    this.displayToggle=this.displayToggle.bind(this);
    this.saveOrder=this.saveOrder.bind(this);
    this.getShopOrders();
    this.orderReverse=this.orderReverse.bind(this);
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

  saveOrder(order) {
    window.order = order;
  }
  orderReverse(){
    this.setState({
      orders: this.state.orders.reverse(),
    });
  }

  render() {
    const orders = this.state.orders;
    // window.orders = orders;
    return (
    <div className="mx-auto" style={{maxWidth: '45rem'}}>
      <h4 className="my-2"><span className="badge badge-primary">歷史訂單</span></h4>

      <table className="table text-center table-striped">
        <thead>
          <th>#</th>
          <th onClick={this.orderReverse}>日期 <i class="fa fa-sort" aria-hidden="true"></i></th>
          <th>總金額</th>
        </thead>
        <tbody>
        {orders.map((order, i) => {
          let total=0;
          order.meals.map((meal) => {
            total+=meal.meal_price*meal.amount;
          });
          return (<tr><td>{i+1}</td><td><Link to={`orders/${order.date}`} key={i}><i onClick={() => this.saveOrder(order)}>{order.date}</i></Link></td><td>{total}</td></tr>)
          })
        }
        </tbody>
      </table>
    </div>
    );
  }
}
 
export default OrderList
