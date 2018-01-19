import React, { Component } from "react";
import {Button} from 'reactstrap';

class Order extends React.Component {

  constructor(props) {
    super(props);
    this.returnOrderList = this.returnOrderList.bind(this);
  }

  returnOrderList() {
    window.location.replace('/orders');
  }

  render() {
    console.log(window.order);
    const order = window.order ? window.order : {meals: []};
    if (order.meals.length == 0) {
      alert("Order not found!");
      window.location.replace('/orders');
    }
    let total = 0;

    return (
    <div className="mx-auto" style={{maxWidth: '45rem'}}>
      <h4 className="my-2" onClick={this.returnOrderList}><span className="badge badge-primary">返回列表</span></h4>
      <div className="row my-3">
        <div className="text-center col-12" id="today">
          {this.props.match.params.orderDate}
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">餐點名稱</th>
            <th scope="col" className="text-right">份數</th>
            <th scope="col" className="text-right">金額</th>
          </tr>
        </thead>
        <tbody>
          {
            order.meals.map((meal, i) => {
              total += meal.meal_price * meal.amount;
              return (
                <tr key={i}>
                  <td>{meal.meal_name}</td>
                  <td className="text-right">{meal.amount}</td>
                  <td className="text-right">{meal.meal_price * meal.amount}</td>
                </tr>
              );
            })
          }
          <tr className="font-weight-bold">
            <td scope="row" colSpan="2" >總金額</td>
            <td className="text-right">{total}</td>
          </tr>
        </tbody>
      </table>
      <hr/>
    </div>
    );
  }
}
 
export default Order
