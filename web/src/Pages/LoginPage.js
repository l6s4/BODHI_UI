import React, { Component } from 'react';
import './LoginPage.css';
import Button from '../components/Button';
import Input from '../components/Input';
import { Redirect } from 'react-router-dom';
import loginFetch from '../actions/login.action';
import { connect } from 'react-redux';

class LoginPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email_id: "",
      password: "",
      submitted: false
    }

    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);

  }
  changeHandler = (event) => {
    this.setState({
      [ event.target.name ]: event.target.value
    });
  }
  submitHandler = (event) => {
    event.preventDefault();
    this.setState({ submitted: true });
    const { email_id, password } = this.state;
    if (email_id.trim().length === 0 || password.trim().length === 0) {
      return;
    }
    console.log(email_id, password);
    this.props.loginFetch(email_id, password);
  }
  signUpHandler = (event) => {
    event.preventDefault();
    this.props.history.push("/createUser");
  }

  render() {
    const { email_id, password, submitted } = this.state;
    if (this.props.loggedIn) {
      return <Redirect to="/userprofile" />
    }
    return (
      <div className="login">
        <h1>Login to Bodhi</h1>
        <form className="login-form">
          <table>
            <tbody>
              <tr>
                <td><Input placeholder="Email-id" type="email" name="email_id" onChange={this.changeHandler}></Input></td>
              </tr>
              <tr><td>{submitted && !email_id && <div className="label" >Please enter your Username</div>}</td>
              </tr>
              <tr>
                <td><input placeholder="Password" type="password" name="password" onChange={this.changeHandler}></input></td>
              </tr>
              <tr><td>{submitted && !password && <div className="label">Please enter your Password</div>}</td>
              </tr>
              <tr align="center">
                <td><Button className="button button1" onClick={this.submitHandler}>Login</Button>
                  <Button className="button button1" onClick={this.signUpHandler}>Sign Up</Button></td>
              </tr>
              {/* <tr><td>{this.props.errorOccurred && <Error>{this.props.errorMsg}</Error>}</td></tr> */}
              <tr><td>{this.props.errorOccurred && <p style={{ color: "red" }}>{this.props.errorMsg}</p>}</td></tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.login.token,
    loggedIn: state.login.loggedIn,
    loggedUser: state.login.loggedUser,
    errorOccurred: state.login.errorOccurred,
    errorMsg: state.login.errorMsg
  };
}

const mapDispatcherToProps = {
  loginFetch
}

export default connect(mapStateToProps, mapDispatcherToProps)(LoginPage);