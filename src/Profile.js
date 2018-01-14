import React, { Component } from "react";
import {API} from "./API";

class Profile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      shop_name: '',
      username: '',
      password: '',
      shop_phone: '',
      shop_address: '',
      shipping_fee: 0,
      highest_amount: 0,
      lowest_amount: 0,
      shop_discount: '',
      shop_time: '',
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      settlement: '',
      payment: '',
    }

    // this.renderShopData = this.renderShopData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.getShopInfo();

  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);

    const data = {
      shop_name: this.state.shop_name,
      username: this.state.username,
      password: this.state.password,
      shop_phone: this.state.shop_phone,
      shop_address: this.state.shop_address,
      shipping_fee: this.state.shipping_fee,
      highest_amount: this.state.highest_amount,
      lowest_amount: this.state.lowest_amount,
      shop_discount: this.state.shop_discount,
      shop_time: this.state.shop_time,
      settlement: this.state.settlement,
      payment: this.state.payment,
    }

    API.updateShopInfo(data).then((res) => {
      if (res.statusCode == 200) {
        // console.log(res.data);
        this.renderShopInfo(res.data);
        alert('修改成功');

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

  handleCancel(e) {
    e.preventDefault();
    this.getShopInfo();
  }

  renderShopInfo(data) {
    const days = data.shop_time.split(',');
    console.log(days);
    let mon = false; let tue = false; let wed = false; let thu = false; let fri = false;
    for (let day of days) {
      switch (day) {
        case '1':
          mon = true; break;
        case '2':
          tue = true; break;
        case '3':
          wed = true; break;
        case '4':
          thu = true; break;
        case '5':
          fri = true; break;
      }
    }

    this.setState({
      shop_name: data.shop_name,
      username: data.username,
      password: data.password,
      shop_phone: data.shop_phone,
      shop_address: data.shop_address,
      shipping_fee: data.shipping_fee,
      highest_amount: data.highest_amount,
      lowest_amount: data.lowest_amount,
      shop_discount: data.shop_discount,
      shop_time: data.shop_time,
      mon: mon,
      tue: tue,
      wed: wed,
      thu: thu,
      fri: fri,
      settlement: data.settlement == 'day' ? 'day' : 'month',
      payment: data.payment == 'transfer' ? 'transfer' : 'cash',
    });
  }

  getShopInfo() {

    API.getShopInfo().then((res) => {
      if (res.statusCode == 200) {
        // console.log(res.data);
        this.renderShopInfo(res.data);

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

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleCheckbox(e) {
    console.log(e.target.name, e.target.checked);
    this.setState({
      [e.target.name]: e.target.checked
    })
  }

  render() {

    return (
      <div>

        <form className="mx-auto my-2" style={{maxWidth: '75%'}} onSubmit={this.handleSubmit}>

          <h4 className=""><span className="badge badge-primary">店家資料</span></h4>

          <hr/>

          <div className="row">
            <div className="form-group col-md-6">
              <label className="col-form-label">店家名稱</label>
              <input type="text" className="form-control" name="shop_name" value={this.state.shop_name} onChange={this.handleChange}/>
            </div>
            <div className="form-group col-md-6">
              <label className="col-form-label">帳號</label>
              <div className="col-form-control mx-3">{this.state.username}</div>
            </div>
          </div>

          <hr/>

          <div className="row">
              <div className="form-group col-md-6">
                <label className="col-form-label">營業時間</label>
                <div className="form-check row mx-1 my-1">
                  <label className="form-check-label col-md-2">
                    <input className="form-check-input" type="checkbox" name="mon" checked={this.state.mon} onChange={this.handleCheckbox}/>Mon
                  </label>
                  <label className="form-check-label col-md-2">
                    <input className="form-check-input" type="checkbox" name="tue" checked={this.state.tue} onChange={this.handleCheckbox}/>Tue
                  </label>
                  <label className="form-check-label col-md-2">
                    <input className="form-check-input" type="checkbox" name="wed" checked={this.state.wed} onChange={this.handleCheckbox}/>Wed
                  </label>
                  <label className="form-check-label col-md-2">
                    <input className="form-check-input" type="checkbox" name="thu" checked={this.state.thu} onChange={this.handleCheckbox}/>Thu
                  </label>
                  <label className="form-check-label col-md-2">
                    <input className="form-check-input" type="checkbox" name="fri" checked={this.state.fri} onChange={this.handleCheckbox}/>Fri
                  </label>
                </div>
              </div>
              <div className="form-group col-md-6">
                <label className="col-form-label">電話</label>
                <input type="text" className="form-control" name="shop_phone" value={this.state.shop_phone} onChange={this.handleChange}/>
              </div>
          </div>

          <hr/>

          <div className="row">
              <div className="form-group col-md-12">
                <label className="col-form-label">地址</label>
                <input type="text" className="form-control" name="shop_address" value={this.state.shop_address} onChange={this.handleChange}/>
              </div>
          </div>

          <hr/>

          <div className="row">
            <div className="form-group col-md-4">
              <label className="col-form-label">運費</label>
              <input type="text" className="form-control" name="shipping_fee" value={this.state.shipping_fee} onChange={this.handleChange}/>
            </div>
            <div className="form-group col-md-4">
              <label className="col-form-label">最高數量</label>
              <input type="text" className="form-control" name="highest_amount" value={this.state.highest_amount} onChange={this.handleChange}/>
            </div>
            <div className="form-group col-md-4">
              <label className="col-form-label">最低數量</label>
              <input type="text" className="form-control" name="lowest_amount" value={this.state.lowest_amount} onChange={this.handleChange}/>
            </div>
          </div>

          <hr/>

          <div className="form-group my-auto row">
            <label className="col-md-4">結帳方式</label>

            <div className="form-check col-md-4">
              <label className="form-check-label">
              <input className="form-check-input" type="radio" name='settlement' value='day' checked={this.state.settlement === 'day'} onChange={this.handleChange}/>
                日結
              </label>
            </div>

            <div className="form-check col-md-4">
              <label className="form-check-label">
              <input className="form-check-input" type="radio" name='settlement' value='month' checked={this.state.settlement === 'month'} onChange={this.handleChange}/>
                月結
              </label>
            </div>
          </div>

          <hr/>

          <div className="form-group my-auto row">
            <label className="col-md-4">支付方式</label>

            <div className="form-check col-md-4">
              <label className="form-check-label">
              <input className="form-check-input" type="radio" name='payment' value='cash' checked={this.state.payment === 'cash'} onChange={this.handleChange}/>
                現金
              </label>
            </div>

            <div className="form-check col-md-4">
              <label className="form-check-label">
              <input className="form-check-input" type="radio" name='payment' value='transfer' checked={this.state.payment === 'transfer'} onChange={this.handleChange}/>
                轉帳
              </label>
            </div>
          </div>

          <hr/>

          <div className="text-center mx-auto row justify-content-around">
              <button type="submit"className="btn btn-success col-md-3">儲存</button>
              <span className="btn btn-danger col-md-3" onClick={this.handleCancel}>取消</span>
          </div>
        </form>
    </div>
    );
  }
}

export default Profile

// TODO
// 防呆還沒寫
