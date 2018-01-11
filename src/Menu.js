import React, { Component } from "react";

class Menu extends React.Component {

  render() {
    return (
    <div className="mx-auto" style={{maxWidth: '75%'}}>
      <table className="table text-center addItem">
            <tbody>
                <tr>
                    <th className="align-middle">新增餐點</th>
                    <td><input id="newTitle" type="text" className="form-control" placeholder='餐點名稱'/></td>
                    <td><input id="newPrice" type="text" className="form-control" placeholder='餐點價格'/></td>
                    <td className="addOk align-middle"><i className="fa fa-plus-square-o" aria-hidden="true"　style={awesomeSize}/></td>
                </tr>
            </tbody>
        </table>
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
                    <td><i className="fa fa-pencil" aria-hidden="true" style={awesomeSize}/></td>
                    <td><i className="fa fa-trash" aria-hidden="true" style={awesomeSize}/></td>
                </tr>
                <tr>
                    <td>山雞肉飯</td>
                    <td>70</td>
                    <td><i className="fa fa-pencil" aria-hidden="true" style={awesomeSize}/></td>
                    <td><i className="fa fa-trash" aria-hidden="true"style={awesomeSize}/></td>
                </tr>
                <tr>
                    <td>山雞肉飯</td>
                    <td>70</td>
                    <td><i className="fa fa-pencil" aria-hidden="true" style={awesomeSize}/></td>
                    <td><i className="fa fa-trash" aria-hidden="true" style={awesomeSize}/></td>
                </tr>
            </tbody>
        </table>
    </div>
    );
  }
}

const awesomeSize={
  fontSize:'1.5em'
};
 
export default Menu
