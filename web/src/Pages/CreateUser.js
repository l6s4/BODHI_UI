import React, { Component } from 'react';
import './CreateUser.css';
import { connect } from 'react-redux';
import createUser from '../actions/createUser.action';
class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
        this.state = {
            email_id: "",
            password: "",
            first_name: "",
            last_name: "",
            user_type: "",
            dob: "",
            address: "",
            contact_no: "",
            clinic_id: ""
        }
    }
    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state.password);
        const userInfo = {
            email_id: this.state.email_id,
            password: this.state.password,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            user_type: this.state.user_type,
            dob: this.state.dob,
            address: this.state.address,
            contact_no: this.state.contact_no,
            clinic_id: this.state.clinic_id
        }
        this.props.createUser(userInfo);
    }
    render() {
        return (
            <div className="createUser">
                <h1>Sign Up</h1>
                <form className="create-user-form">
                    <p><input placeholder="Email-id" type="email" name="email_id" value={this.state.email_id} onChange={this.changeHandler}></input></p>
                    <p><input placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.changeHandler}></input></p>
                    <p><input placeholder="First Name" type="first_name" name="first_name" value={this.state.first_name} onChange={this.changeHandler}></input></p>
                    <p><input placeholder="Last Name" type="last_name" name="last_name" value={this.state.last_name} onChange={this.changeHandler}></input></p>
                    <p><input placeholder="User Type" type="user_type" name="user_type" value={this.state.user_type} onChange={this.changeHandler}></input></p>
                    <p><input placeholder="Date Of Birth" type="dob" name="dob" value={this.state.dob} onChange={this.changeHandler}></input></p>
                    <p><input placeholder="Address" type="address" name="address" value={this.state.address} onChange={this.changeHandler}></input></p>
                    <p><input placeholder="Contact No." type="contact_no" name="contact_no" value={this.state.contact_no} onChange={this.changeHandler}></input></p>
                    <p><input placeholder="Clinic ID" type="clinic_id" name="clinic_id" value={this.state.clinic_id} onChange={this.changeHandler}></input></p>
                    <p><button className="button button1" onClick={this.submitHandler}>Create</button></p>
                </form>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        successMsg: state.successMsg,
        error: state.errorOccurred
    };
}
const mapDispatcherToProps = {
    createUser
}
export default connect(mapStateToProps, mapDispatcherToProps)(CreateUser);


