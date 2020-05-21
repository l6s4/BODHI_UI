import React, { Component } from 'react';
import './LoginPage.css';
import loginFetch from '../redux/actions/loginFetch';
import { connect } from 'react-redux';
class LoginPage extends Component {
    state = {
        email_id: "",
        password: ""
    }
    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    submitHandler = (event) => {
        event.preventDefault();
        const email = this.state.email_id;
        const password = this.state.password;
        if (email.trim().length === 0 || password.trim().length === 0) {
            return;
        }
        console.log(email, password);
        loginFetch(email, password);
    }
    render() {
        return (
            <div className="login">
                <h1>Login to Bodhi</h1>
                <form className="login-form">
                    <p>  <input placeholder="Email-id" type="email" name="email_id" value={this.state.email_id} onChange={this.changeHandler}></input></p>
                    <p>   <input placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.changeHandler}></input></p>
                    <p>  <button type="submit" onClick={this.submitHandler}>Login</button></p>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    loginFetch: userInfo => dispatch(loginFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(LoginPage);

