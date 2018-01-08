import React, { Component } from "react";
// import './expand.png';
class Orders extends React.Component {

  render() {
    return (
    <div className="mx-auto" style={{maxWidth: '75%'}}> 
    <table className="table table-hover my-3">
        <thead>
            <tr>
                <th scope="col">日期</th>
                <th scope="col">訂購金額</th>
                <th scope="col">展開</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1/3</td>
                <td>450</td>
                <td><i class="fa fa-chevron-down" aria-hidden="true"></i></td>
            </tr>
            <tr>
                <td>1/3</td>
                <td>380</td>
                <td><i class="fa fa-chevron-down" aria-hidden="true"></i></td>
            </tr>
            <tr>
                <td>1/3</td>
                <td>510</td>
                <td><i class="fa fa-chevron-down" aria-hidden="true"></i></td>
            </tr>
        </tbody>
    </table>

    </div>
    );
  }
}
 
export default Orders