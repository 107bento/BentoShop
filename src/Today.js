import React, { Component } from "react";
import moment from "moment";
import {API} from './API';

class Today extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      order: null
    }

    this.getTodayOrders();
  }

  getTodayOrders() {
    const date = moment().format('YYYY-MM-DD');
    API.getTodayOrders(date).then((res) => {
      if (res.statusCode == 200) {
        // TODO
        console.log(res.data);
        this.setState({
          order: res.data
        });
        // console.log(this.state.orders);
      } else if (res.statusCode == 401) {
        alert('請重新登入');
        window.location.replace("/login");
      } else {
        this.setState({
          order: null
        })
        // alert(res.errorMessages);
        console.log(res.errorMessages);
      }
    }).catch((error) => {
      // alert(error);
    });
  }

  render() {

    const order = this.state.order;
    // console.log(order.meals);
    let html = (<h2 className="text-center"><span className="badge badge-lg badge-warning">今日無訂單</span></h2>);
    if (order) {
      let total = 0;
      html = (
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
      );
    }

    return (
      <div className="mx-auto" style={{maxWidth: '45rem'}}>
        <h4 className="my-2"><span className="badge badge-primary">今日訂單</span></h4>
        <div className="my-3 text-center" id="today">
          {moment().format("YYYY-MM-DD")}
        </div>
        {html}
      </div>
    );
  }
}
 
export default Today
