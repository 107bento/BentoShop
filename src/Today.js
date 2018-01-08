import React, { Component } from "react";
import moment from "moment";

class Today extends React.Component {

  render() {
    return (
      <div className="mx-auto" style={{maxWidth: '75%'}}>
        <div className="my-3 text-center" id="today">
          {moment().format("YYYY/MM/DD")}
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
            <tr>
              <td>山雞肉飯</td>
              <td className="text-right">10</td>
              <td className="text-right">700</td>
            </tr>
            <tr>
              <td>滷肉飯</td>
              <td className="text-right">5</td>
              <td className="text-right">350</td>
            </tr>
            <tr>
                  <td>餐點三</td>
                  <td className="text-right">0</td>
                  <td className="text-right">0</td>
              </tr>
            <tr className="font-weight-bold">
              <td scope="row" colSpan="2" >總金額</td>
              <td className="text-right">1050</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
 
export default Today
