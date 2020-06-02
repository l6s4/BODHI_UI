import React, { Component } from 'react';
import './CreateUser.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Label from '../components/Label';
import Button from '../components/Button';
import Box from '../components/Box';
import Input from '../components/Input';
import { connect } from 'react-redux';
import createUser from '../actions/createUser.action';
import ModalWindow from "../components/ModalWindow";
class CreateUser extends Component {
  constructor (props) {
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
      clinic_id: "",
      submitted: false
    }
  }
  changeHandler = (event) => {
    this.setState({
      [ event.target.name ]: event.target.value
    });
  }
  handleChange = date => {
    this.setState({
      dob: date
    });
  };
  submitHandler = (event) => {
    event.preventDefault();
    this.setState({
      submitted: true
    })
    console.log(this.state.password);
    const userInfo = {
      email_id: this.state.email_id,
      password: this.state.password,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      user_type: this.state.user_type,
      dob: this.state.dob,
      address: this.state.address,
      contact_no: this.state.contact_no
    }
    this.props.createUser(userInfo);
  }
  render() {
    const { email_id, password, first_name, last_name, user_type, address, contact_no, submitted } = this.state;
    return (
      <form>
        <h1>Sign Up</h1>
        <div className="createUser" style={{ width: "30%", margin: "auto" }}>
          <Box>
            <h1>Sign Up</h1>
            <table>
              <tbody>
                <tr>
                  <td><Label>Email ID</Label></td>
                  <td>
                    <Input type="email" name="email_id" placeholder={submitted && !email_id && "Please enter your email_id"} onChange={this.changeHandler} /></td>
                </tr>
                <tr>
                  <td><Label>First Name</Label></td>
                  <td>
                    <Input type="first_name" name="first_name" placeholder={submitted && !first_name && "Please enter your first_name"} onChange={this.changeHandler} /></td>
                </tr>
                <tr>
                  <td><Label>Last Name</Label></td>
                  <td><Input type="last_name" name="last_name" placeholder={submitted && !last_name && "Please enter your last_name"} onChange={this.changeHandler} /></td>
                </tr>
                <tr>
                  <td><Label>Password</Label></td>
                  <td><Input type="password" name="password" placeholder={submitted && !password && "Please enter your password"} onChange={this.changeHandler} /></td>
                </tr>
                <tr>
                  <td><Label>Date Of Birth</Label></td>
                  <td>
                    <DatePicker
                      selected={this.state.dob}
                      onChange={this.handleChange}
                      dateFormat="yyyy-MM-dd"
                    />
                  </td>
                </tr>
                <tr>
                  <td><Label>User Type</Label></td>
                  <td><Input type="user_type" name="user_type" placeholder={submitted && !user_type && "Please enter your user_type"} onChange={this.changeHandler} /></td>
                </tr>
                <tr>
                  <td><Label>Address</Label></td>
                  <td><Input type="address" name="address" placeholder={submitted && !address && "Please enter your address"} onChange={this.changeHandler} /></td>
                </tr>
                <tr>
                  <td><Label>Contact Number</Label></td>
                  <td><Input type="contact_no" name="contact_no" placeholder={submitted && !contact_no && "Please enter your contact_no"} onChange={this.changeHandler} /></td>
                </tr>
                <tr>
                  <td><Button className="button button1" align="center" onClick={this.submitHandler}>Save Details</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Box>
        </div>
        {this.props.created_id && <ModalWindow>this.props.created_id </ModalWindow>}
      </form>
    )
  }
}
function mapStateToProps(state) {
  return {
    created_id: state.createUser.created_id,
    error: state.createUser.errorOccurred
  };
}
const mapDispatcherToProps = {
  createUser
}
export default connect(mapStateToProps, mapDispatcherToProps)(CreateUser);


