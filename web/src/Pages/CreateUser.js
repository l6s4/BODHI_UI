import React, { Component } from 'react';
import './CreateUser.css';
import { connect } from 'react-redux';
import createUser from '../actions/createUser.action';
class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
        this.state = {
            userInfo: [{
                email_id: "",
                password: "",
                first_name: "",
                last_name: "",
                user_type: "",
                dob: "",
                address: "",
                contact_no: ""
            }]
        }
    }
    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    submitHandler = (event) => {
        event.preventDefault();
        this.props.createUser(this.state.userInfo);
    }
    render() {
        return (
            <div className="createUser">
                <h1>Sign Up</h1>
                <form className="create-user-form">
                    <p>  <input placeholder="Email-id" type="email" name="email_id" value={this.state.email_id} onChange={this.changeHandler}></input></p>
                    <p>   <input placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.changeHandler}></input></p>
                    <p>   <input placeholder="First Name" type="first_name" name="first_name" value={this.state.first_name} onChange={this.changeHandler}></input></p>
                    <p>   <input placeholder="Last Name" type="last_name" name="last_name" value={this.state.last_name} onChange={this.changeHandler}></input></p>
                    <p>   <input placeholder="User Type" type="user_type" name="user_type" value={this.state.user_type} onChange={this.changeHandler}></input></p>
                    <p>   <input placeholder="Date Of Birth" type="dob" name="dob" value={this.state.dob} onChange={this.changeHandler}></input></p>
                    <p>   <input placeholder="Address" type="address" name="address" value={this.state.address} onChange={this.changeHandler}></input></p>
                    <p>   <input placeholder="Contact No." type="contact_no" name="contact_no" value={this.state.contact_no} onChange={this.changeHandler}></input></p>
                    <p>  <button className="button button1" onClick={this.submitHandler}>Create</button></p>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    createUser: userInfo => dispatch(createUser(userInfo))
})

export default connect(null, mapDispatchToProps)(CreateUser);

