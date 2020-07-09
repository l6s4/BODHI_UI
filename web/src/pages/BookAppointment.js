import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuBar from '../components/MenuBar';
import Select from 'react-select';
import Box from '../components/Box';
import { Redirect } from 'react-router-dom';
import getClinicName from '../actions/getClinicName.action';
import Button from '../components/Button';
const { getClinic, resetClinic } = require('../actions/getClinicDetails.action');

class BookAppointment extends Component {
  constructor (props) {
    super(props);
    this.state = {
      clinic_name: null,
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.inputhandleChange = this.inputChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);

  }
  componentDidMount() {
    this.props.resetClinic();
    this.setState({
      clinic_details: null
    })
  }
  inputChangeHandler = (event) => {
    if (event.match(/^[0-9a-zA-Z]+$/)) {
      this.props.getClinicName(event);
    }
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }
  submitHandler = (event) => {
    event.preventDefault();
    this.setState({ submitted: true });
    // const selectedId = this.props.clinic_name[ 0 ].id;
    // console.log("name:", this.state.selectedOption.value);
    const selectedClinic = this.state.selectedOption.value;
    this.props.getClinic(selectedClinic);
  }
  render() {
    const { submitted } = this.state;
    if (this.props.clinic_details) {
      return <Redirect to="/clinicPage" />
    }
    return (
      <div className="booking">
        <div style={{ position: "fixed", left: "0px" }}><MenuBar /></div>
        <form className="booking-form">
          <div className="booking" style={{ width: "30%", margin: "auto" }}>
            <Box>
              <table>
                <tbody>
                  <tr><td><h2>Book an Appointment with your Practitioner</h2></td></tr>
                  <tr><td>
                    <Select placeholder="Select Clinic" className="mt-4 col-md-8 col-offset-4" onChange={this.handleChange}
                      onInputChange={this.inputChangeHandler}
                      options={this.props.clinic_name && this.props.clinic_name.map(data => ({ label: data.key, value: data.id }))} /></td>
                  </tr>
                  <tr><td>{submitted && !this.props.clinic_name && <div className="label" >Please Select a Clinic</div>}</td></tr>
                  <tr align="center"><td><Button className="button button1" onClick={this.submitHandler}>Search</Button></td></tr>
                </tbody>
              </table>
            </Box>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    clinic_name: state.getClinicName.clinic_name,
    clinic_details: state.getClinicDetails.clinic_details
  };
}

const mapDispatcherToProps = {
  getClinicName,
  getClinic,
  resetClinic
}

export default connect(mapStateToProps, mapDispatcherToProps)(BookAppointment);