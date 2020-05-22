import React, { Component } from 'react';
import './LoginPage.css';
import Button from '../components/Button';
import loginFetch from '../actions/login.action';
import { connect } from 'react-redux';
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      email_id: "",
      password: ""
    }
  }
  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  submitHandler = (event) => {
    event.preventDefault();
    const email_id = this.state.email_id;
    const password = this.state.password;
    if (email_id.trim().length === 0 || password.trim().length === 0) {
      return;
    }
    console.log(email_id, password);
    this.props.loginFetch(email_id, password);
  }
  render() {
    return (
      <div className="login">
        <h1>Login to Bodhi</h1>
        <form className="login-form">
          <table>
            <tbody>
              <tr>
                <td><input placeholder="Email-id" type="email" name="email_id" value={this.state.email_id} onChange={this.changeHandler}></input></td>
              </tr>
              <tr>
                <td><input placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.changeHandler}></input></td>
              </tr>
              <tr align="center">
                <td><button className="button button1" onClick={this.submitHandler} text="Login">Login</button>
                  <button className="button button1" onClick={this.submitHandler} text="Sign Up">Sign Up</button></td>
                {/* <td><Button onClick={this.submitHandler} text="Login"></Button>
                  <Button onClick={this.submitHandler} text="Sign Up"></Button></td> */}
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { token: state.login.token };
}

const mapDispatcherToProps = {
  loginFetch
}

export default connect(mapStateToProps, mapDispatcherToProps)(LoginPage);