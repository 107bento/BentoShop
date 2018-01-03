import React, { Component } from 'react';

class LoginContainer extends Component {
  render() {
    return (
      <div className="content">
        <form class="mx-auto" style={{maxWidth: 46 + 'em'}}>
        <div class="row">
          <h4>登入系統</h4>
          <div class="alert alert-danger show fade col-12" id="login-alert" role="alert" hidden>
            <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> 帳號或密碼錯誤
          </div>
        </div>

        <div class="form-group row">
          <div class="input-group">
            <div class="input-group-addon" id="basic-addon1"><i class="fa fa-user" aria-hidden="true"></i></div>
            <input class="form-control" id="username" name="username" type="text" autocorrect="off" spellcheck="false" autocapitalize="off" placeholder="帳號" required/>
          </div>
        </div>

        <div class="form-group row">
          <div class="input-group">
            <div class="input-group-addon" id="basic-addon1"><i class="fa fa-key" aria-hidden="true"></i></div>
            <input class="form-control" id="password" name="password" type="password" autocorrect="off" spellcheck="false" autocapitalize="off" placeholder="密碼" required/>
          </div>
        </div>

        <div class="form-group row">
          <button class="btn btn-success form-control" id="login-btn" type="submit" onmousedown="event.preventDefault()">登入</button>
        </div>
        </form>
      </div>
    );
  }
}

export default LoginContainer;
