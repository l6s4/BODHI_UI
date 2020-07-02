import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
//import './UserProfile.css';
import Label from '../components/Label';
import Button from '../components/Button';
import Box from '../components/Box';
import Input from '../components/Input';
import MenuBar from '../components/MenuBar';
import userProfile from '../actions/userProfile.action';
import updateUser from '../actions/updateUser.action';
class UserProfile extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: {
        email_id: "",
        password: "",
        first_name: "",
        last_name: "",
        dob: "",
        address: "",
        contact_no: ""
      }
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  componentDidMount() {
    this.props.userProfile(this.props.loggedUser);
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.user) {
  //     let newDob = new Date(this.props.user.dob);
  //     newDob.setHours(0, 0, 0, 0);
  //     if (prevState && prevState.dob && prevState.dob.toDateString() != newDob.toDateString()) {
  //       this.setState({ dob: newDob });
  //     }
  //   }
  // }
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
    if (!this.state.password) {
      alert("Please enter your password");
      return;
    }
    const userInfo = {
      email_id: this.props.user.email_id,
      password: this.state.password,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      dob: this.state.dob,
      address: this.state.address,
      contact_no: this.state.contact_no
    }
    Object.keys(userInfo).forEach((key) => (userInfo[ key ] == null) && delete userInfo[ key ]);
    const userToSave = Object.assign(this.props.user, userInfo);
    this.props.updateUser(userToSave);
  }
  render() {
    const { user } = this.props;
    return (
      <div>
        <div style={{ position: "fixed", left: "0px" }}><MenuBar /></div>
        <form>
          <div className="userProfile" style={{ width: "30%", margin: "auto" }}>
            <Box>
              <h1>User Profile</h1>
              {user && <> <p>{user.email_id}</p>
                <table>
                  <tbody>
                    <tr>
                      <td style={{ width: "50%" }}><Label>First Name</Label></td>
                      <td>
                        <Input type="text" name="first_name" defaultValue={user.first_name} onChange={this.changeHandler} /></td>
                    </tr>
                    <tr>
                      <td><Label>Last Name</Label></td>
                      <td><Input type="last_name" name="last_name" defaultValue={user.last_name} onChange={this.changeHandler} /></td>
                    </tr>
                    <tr>
                      <td><Label>Password</Label></td>
                      <td><Input placeholder="Enter new Password" type="password" name="password" defaultValue={user.password} onChange={this.changeHandler} /></td>
                    </tr>
                    <tr>
                      <td><Label>Date Of Birth</Label></td>
                      <td>
                        <DatePicker
                          selected={new Date(this.state.dob || user.dob)}
                          onChange={this.handleChange}
                          dateFormat="yyyy-MM-dd"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td><Label>Address</Label></td>
                      <td><Input type="address" name="address" defaultValue={user.address} onChange={this.changeHandler} /></td>
                    </tr>
                    <tr>
                      <td><Label>Contact Number</Label></td>
                      <td><Input type="contact_no" name="contact_no" defaultValue={user.contact_no} onChange={this.changeHandler} /></td>
                    </tr>
                    <tr>
                      <td><Button className="button button1" align="center" onClick={this.submitHandler}>Save Changes</Button>
                      </td>
                    </tr>
                    {this.props.updated && <tr><td><div className="label">Details Updated</div></td></tr>}
                  </tbody>
                </table>
              </>}
            </Box>
          </div>
        </form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    loggedUser: state.login.loggedUser,
    user: state.userProfile.user,
    updated: state.updateUser.updated
  };
}

const mapDispatcherToProps = {
  userProfile,
  updateUser
}

export default connect(mapStateToProps, mapDispatcherToProps)(UserProfile);
