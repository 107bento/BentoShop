import React, { Component } from 'react';
import { API } from './API';

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formValues: {
        username: '',
        password: ''
      }
    };
  }
  handleSubmit= (e) => {
    e.preventDefault();
    // console.log(this);
    const username = this.state.formValues.username;
    const password = this.state.formValues.password;

    API.login(username, password).then(response => {
      if (response.statusCode === 200) {
        console.log(response);

        window.location.replace("/");
      } else if (response.statusCode === 401) {
        alert('帳號或密碼錯誤，請重新登入');
        this.setState({
          formValues: {
            username: '',
            password: ''
          }
        });
        console.log(this.state);
      } else {
        alert(response.errorMessages);
        console.log(response.errorMessages);
      }
    }).catch((error) => {
      console.log(error);
    });

  }

  handleChange = (e) =>  {
    e.preventDefault();
    let formValues = this.state.formValues;
    let name = e.target.name;
    let value = e.target.value;

    formValues[name] = value;

    this.setState({formValues})
  }

  mouseDown = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="content mx-auto my-5" style={{width: 235}}>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <h4>登入</h4>
            <div className="alert alert-danger show fade col-12" id="login-alert" role="alert" hidden>
              <i className="fa fa-exclamation-triangle" aria-hidden="true"></i> 帳號或密碼錯誤
            </div>
          </div>

          <div className="form-group row">
            <div className="input-group">
              <div className="input-group-addon"><i className="fa fa-user" aria-hidden="true"></i></div>
              <input className="form-control" name="username" value={this.state.formValues.username} type="text" placeholder="帳號" required onChange={this.handleChange}/>
            </div>
          </div>

          <div className="form-group row">
            <div className="input-group">
              <div className="input-group-addon"><i className="fa fa-key" aria-hidden="true"></i></div>
              <input className="form-control" name="password" value={this.state.formValues.password} type="password" placeholder="密碼" required onChange={this.handleChange}/>
            </div>
          </div>

          <div className="form-group row">
            <button className="btn btn-success form-control" id="login-btn" type="submit" onMouseDown={this.mouseDown}>登入</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginContainer;
