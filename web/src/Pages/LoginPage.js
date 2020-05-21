import React, { Component } from 'react';
import './LoginPage.css';
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.emailEl = React.createRef();
        this.passwordEl = React.createRef();
    }
    submitHandler = (event) => {
        event.preventDefault();
        const email = this.emailEl.current.value;
        const password = this.passwordEl.current.value;
        if (email.trim().length === 0 || password.trim().length === 0) {
            return;
        }
        console.log(email, password);
        const requestBody = {
            query: `
            mutation{
                login(email_id:"${email}",password:"${password}")
            }
            `
        }
        fetch('http://localhost:4000', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status !== 200 && res.status !== 201) {
                throw new Error('Failed!');
            }
            return res.json();
        })
            .then(resData => {
                console.log(`Response:${JSON.stringify(resData)}`);
            })
            .catch(err => {
                console.log(err);
            });

    }
    render() {
        return (
            <div className="login">
                <h1>Login to Bodhi</h1>
                <form className="login-form" onSubmit={this.submitHandler}>
                    <p>  <input placeholder="Username" type="email" id="email" ref={this.emailEl}></input></p>
                    <p>   <input placeholder="Password" type="password" id="password" ref={this.passwordEl}></input></p>
                    <p>  <button type="submit">Login</button></p>
                </form>
            </div>
        );
    }
}

export default LoginPage;
