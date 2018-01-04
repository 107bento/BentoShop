import React, { Component } from 'react';

class LoginContainer extends Component {
  render() {
    return (
      <div className="content">
        <form className="mx-auto" style={{maxWidth: 46 + 'em'}}>
        <div className="row">
          <h4>登入系統</h4>
          <div className="alert alert-danger show fade col-12" id="login-alert" role="alert" hidden>
            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i> 帳號或密碼錯誤
          </div>
        </div>

        <div className="form-group row">
          <div className="input-group">
            <div className="input-group-addon" id="basic-addon1"><i className="fa fa-user" aria-hidden="true"></i></div>
            <input className="form-control" id="username" name="username" type="text" autocorrect="off" spellcheck="false" autocapitalize="off" placeholder="帳號" required/>
          </div>
        </div>

        <div className="form-group row">
          <div className="input-group">
            <div className="input-group-addon" id="basic-addon1"><i className="fa fa-key" aria-hidden="true"></i></div>
            <input className="form-control" id="password" name="password" type="password" autocorrect="off" spellcheck="false" autocapitalize="off" placeholder="密碼" required/>
          </div>
        </div>

        <div className="form-group row">
          <button className="btn btn-success form-control" id="login-btn" type="submit" onmousedown="event.preventDefault()">登入</button>
        </div>
        </form>
      </div>
    );
  }
}

export default LoginContainer;
