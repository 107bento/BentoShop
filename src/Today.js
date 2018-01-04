import React, { Component } from "react";
 
class Today extends React.Component {
  render() {
    return (
    <div className="mx-auto" style={{maxWidth: '75%'}}> 
        <table className="table my-5">
            <thead>
              <tr>
                <th scope="col">餐點名稱</th>
                <th scope="col" className="text-right">份數</th>
                <th scope="col" className="text-right">金額</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>餐點一</td>
                <td className="text-right">10</td>
                <td className="text-right">700</td>
              </tr>
              <tr>
                <td>餐點二</td>
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