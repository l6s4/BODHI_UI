import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import momenttz from "moment-timezone";
import MenuBar from '../components/MenuBar';
import { Redirect } from 'react-router-dom';
import Select from 'react-select';
import Label from '../components/Label';
import ClinicDetails from '../components/ClinicDetails';
import getSchedule from '../actions/getSchedule.action';
import createBooking from '../actions/createBooking.action';
import Button from '../components/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class ClinicPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      submitted: false,
      booked: false,
      startDate: new Date()
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.bookHandler = this.bookHandler.bind(this);
  }
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  handleTimeslotChange = (selectedOption) => {
    this.setState({ selectedOption });
  }
  submitHandler = (event) => {
    event.preventDefault();
    this.setState({ submitted: true });
    const given_date = moment(this.state.startDate).format("YYYY-MM-DD");
    this.props.getSchedule(this.props.clinic_details._id, given_date);
  }
  bookHandler = (doctor, event) => {
    event.preventDefault();
    this.setState({ booked: true });
    const doctor_id = doctor.split('_')[ 1 ];
    const bookingInfo = {
      patient_email_id: this.props.loggedUser,
      clinic_id: this.props.clinic_details._id,
      doctor_id: doctor_id,
      time_slot: this.state.selectedOption.value,
      status: "BOOKED"
    }
    this.props.createBooking(bookingInfo);
  }
  render() {
    const { clinic_details, schedule } = this.props;
    const { submitted, booked } = this.state;
    if (booked && this.props.bookedStatus) {
      return <Redirect to="/mybookings" />
    }
    return (
      <div className="clinicPage">
        <div style={{ position: "fixed", left: "0px" }}><MenuBar /></div>
        <form className="clinic-form">
          <div className="clinic" style={{ width: "70%", margin: "auto" }}>
            {this.props.clinic_details && <>
              <ClinicDetails>
                <h1><label>{clinic_details.name}</label></h1>
                <h2>{clinic_details.city} - {clinic_details.postcode}</h2>
                <p>Email: {clinic_details.email_id}</p><p>Contact No:{clinic_details.contact_no}</p>
                <h5>{clinic_details.about}</h5>
                <table>
                  <tbody>
                    <tr>
                      <td><Label>Please provide Date </Label></td>
                      <td>
                        <DatePicker
                          selected={this.state.startDate}
                          onChange={this.handleChange}
                          dateFormat="yyyy-MM-dd"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td><Button className="button button1" align="center" onClick={this.submitHandler}>Get Available Doctors</Button>
                      </td>
                    </tr>

                    {submitted && (schedule) && <>{
                      Object.entries(doctor_slot(schedule, clinic_details)).map(([ key, value ]) => {
                        return <tr><td><h1>{key.split('_')[ 0 ]}</h1></td>
                          <td><Select className="mt-4 col-md-8 col-offset-4" name="times" onChange={this.handleTimeslotChange} options={value.map(time => ({ label: convertToAESTAndTrim(time), value: time }))} /></td>
                          <td><Button className="button button1" onClick={(event) => this.bookHandler(key, event)}>Book</Button></td></tr>
                      })
                    }</>}
                    {submitted && (schedule) && schedule.length === 0 && <tr><td><Label>No Doctors Available on this date</Label></td></tr>}
                    {/* {booked && !times && <tr><td><p>Please Select Time</p></td></tr>} */}
                    {/* {(this.state.submitted) && !(this.props.schedule) && <tr><td><Label>No Doctors Available on this date</Label></td></tr>} */}
                    {/* {submitted && <> {(this.props.schedule ?
                      Object.entries(doctor_slot(schedule, clinic_details)).map(([ key, value ]) => {
                        return <tr><td><h1>{key}</h1></td>
                          <td><Select className="mt-4 col-md-8 col-offset-4" options={value.map(time => ({ label: time, value: time }))} /></td>
                          <td><Button className="button button1" onClick={this.bookHandler}>Book</Button></td></tr>})
                      : <tr><td><Label>No Doctors Available on this date</Label></td></tr>)}</>} */}
                  </tbody>
                </table>
              </ClinicDetails>
            </>}
          </div>
        </form>
      </div >
    );
  }
}

function doctor_slot(schedule, clinic_details) {
  let doctor_details = clinic_details.doctors;
  let doctor_names = {};
  doctor_details.map(details => {
    const dr_id = details._id;
    const dr_name = details.first_name + details.last_name;
    doctor_names[ dr_id ] = dr_name;
    return doctor_names;
  })

  let doctor_slot = {};
  schedule.forEach(s => {
    const doctorId = s.doctor_id;
    const doctorName = doctor_names[ doctorId ];
    const time_slot = s.time_slot;
    const id_name = doctorName + "_" + doctorId
    let doctor = doctor_slot[ id_name ];
    if (!doctor) {
      doctor_slot[ id_name ] = [];
      doctor = doctor_slot[ id_name ];
    }
    doctor.push(time_slot);
  });
  //console.log(doctor_slot);
  return doctor_slot;
}

function convertToAESTAndTrim(time) {
  return momenttz.tz(time, "Australia/Sydney").format('HH:mm');
}

function mapStateToProps(state) {
  return {
    loggedUser: state.login.loggedUser,
    clinic_details: state.getClinicDetails.clinic_details,
    schedule: state.getSchedule.schedule,
    bookedStatus: state.createBooking.bookedStatus
  };
}

const mapDispatcherToProps = {
  getSchedule,
  createBooking
}

export default connect(mapStateToProps, mapDispatcherToProps)(ClinicPage);