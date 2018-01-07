import React, { Component } from "react";
class Menu extends React.Component {

  render() {
    return (
    <div className="mx-auto" style={{maxWidth: '75%'}}> 
        <table className="table table-stripped text-center">
            <thead>
                <tr>
                    <td>餐點</td>
                    <td>價格</td>
                    <td>編輯</td>
                    <td>刪除</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>山雞肉飯</td>
                    <td>70</td>
                    <td><i className="fa fa-pencil" aria-hidden="true"/></td>
                    <td><i className="fa fa-trash" aria-hidden="true"/></td>
                </tr>
                <tr>
                    <td>山雞肉飯</td>
                    <td>70</td>
                    <td><i className="fa fa-pencil" aria-hidden="true"/></td>
                    <td><i className="fa fa-trash" aria-hidden="true"/></td>
                </tr>
                <tr>
                    <td>山雞肉飯</td>
                    <td>70</td>
                    <td><i className="fa fa-pencil" aria-hidden="true"/></td>
                    <td><i className="fa fa-trash" aria-hidden="true"/></td>
                </tr>
            </tbody>
        </table>
    </div>
    );
  }
}
 
export default Menu