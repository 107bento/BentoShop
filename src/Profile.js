import React, { Component } from "react";
import {API} from "./API";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();

  }
  componentDidMount() {
    API.getShopInfo().then((res) => {
      if (res.statusCode == 200) {
        console.log(res.data);
        let data = res.data;
        const weekDay = data.shop_time.split(',');
        console.log(weekDay);
        this.setState({
          shop_name: data.shop_name,
          username: data.username,
          password: data.password,
          shop_phone: data.shop_phone,
          shop_address: data.shop_address,
          shipping_fee: data.shipping_fee,
          highest_amount: data.highest_amount,
          lowest_amount: data.lowest_amount
        });
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
    return (
      <div className="">
        <form className="mx-auto my-2" style={{maxWidth: '75%'}} onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="form-group col-md-12">
              <label className="col-form-label">店家名稱</label>
              <input type="text" className="form-control" id="shop_name" value={this.state.shop_name}/>
            </div>
          </div>

          <hr/>

          <div className="row">
            <div className="form-group col-md-6">
              <label className="col-form-label">帳號</label>
              <input type="text" readOnly className="form-control" id="username" value={this.state.username}/>
            </div>
            <div className="form-group col-md-6">
              <label className="col-form-label">密碼</label>
              <input type="password" className="form-control" id="password" placeholder="Password" value={this.state.password}/>
            </div>
          </div>

          <hr/>

          <div className="row">
              <div className="form-group col-md-6">
                <label className="col-form-label">營業時間</label>
                <div className="form-check row mx-1 my-1">
                  <label className="form-check-label col-md-2">
                    <input className="form-check-input" type="checkbox" name="shop_time" value="Mon" checked={this.state.mon}/>Mon
                  </label>
                  <label className="form-check-label col-md-2">
                    <input className="form-check-input" type="checkbox" name="shop_time" value="Tue"/>Tue
                  </label>
                  <label className="form-check-label col-md-2">
                    <input className="form-check-input" type="checkbox" name="shop_time" value="Wed"/>Wed
                  </label>
                  <label className="form-check-label col-md-2">
                    <input className="form-check-input" type="checkbox" name="shop_time" value="Thu"/>Thu
                  </label>
                  <label className="form-check-label col-md-2">
                    <input className="form-check-input" type="checkbox" name="shop_time" value="Fri"/>Fri
                  </label>
                </div>
              </div>
              <div className="form-group col-md-6">
                <label className="col-form-label">電話</label>
                <input type="text" className="form-control" id="shop_phone" value={this.state.shop_phone}/>
              </div>
          </div>

          <hr/>

          <div className="row">
              <div className="form-group col-md-12">
                <label className="col-form-label">地址</label>
                <input type="text" className="form-control" id="shop_address" value={this.state.shop_address}/>
              </div>
          </div>

          <hr/>

          <div className="row">
            <div className="form-group col-md-4">
              <label className="col-form-label">運費</label>
              <input type="text" className="form-control" id="shipping_fee" value={this.state.shipping_fee}/>
            </div>
            <div className="form-group col-md-4">
              <label className="col-form-label">最高數量</label>
              <input type="text" className="form-control" id="highest_amount" value={this.state.highest_amount}/>
            </div>
            <div className="form-group col-md-4">
              <label className="col-form-label">最低數量</label>
              <input type="text" className="form-control" id="lowest_amount" value={this.state.lowest_amount}/>
            </div>
          </div>

          <hr/>

          <div className="form-group my-auto row">
            <label className="col-md-4">結帳方式</label>

            <div className="form-check col-md-4">
              <label className="form-check-label">
              <input className="form-check-input" type="radio" name="settlement" value="option1"/>
                日結
              </label>
            </div>

            <div className="form-check col-md-4">
              <label className="form-check-label">
              <input className="form-check-input" type="radio" name="settlement" value="option2"/>
                月結
              </label>
            </div>
          </div>

          <hr/>

          <div className="form-group my-auto row">
            <label className="col-md-4">支付方式</label>

            <div className="form-check col-md-4">
              <label className="form-check-label">
              <input className="form-check-input" type="checkbox" name="payment" value="option1"/>
                現金
              </label>
            </div>

            <div className="form-check col-md-4">
              <label className="form-check-label">
              <input className="form-check-input" type="checkbox" name="payment" value="option2"/>
                轉帳
              </label>
            </div>
          </div>

          <hr/>

          <div className="text-center mx-auto row justify-content-around">
              <button type="submit"className="btn btn-success col-md-3">儲存</button>
              <span className="btn btn-danger col-md-3">取消</span>
          </div>
        </form>
    </div>
    );
  }
}

export default Profile
