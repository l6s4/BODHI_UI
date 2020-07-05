import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import MenuBar from '../components/MenuBar';
import Select from 'react-select';
import Label from '../components/Label';
import ClinicDetails from '../components/ClinicDetails';
import getSchedule from '../actions/getSchedule.action';
import Button from '../components/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class ClinicPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      submitted: false,
      startDate: new Date()
    }
    // this.drHandler = this.drHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  // drHandler = (id) => {
  //   return (event) => {
  //     console.log(id);
  //     this.props.getSchedule(id);
  //   }
  // }
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  submitHandler = (event) => {
    event.preventDefault();
    this.setState({ submitted: true });
    const given_date = moment(this.state.startDate).format("YYYY-MM-DD");
    this.props.getSchedule(this.props.clinic_details._id, given_date);
  }
  render() {
    const { clinic_details } = this.props;
    const schedule = this.props.schedule;
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

                    {(this.props.schedule) && <>
                      {
                        Object.entries(doctor_slot(this.props.schedule, this.props.clinic_details)).map(([ key, value ]) => {
                          return <tr><td><h1>{key}</h1>
                            <Select className="mt-4 col-md-8 col-offset-4" options={value.map(time => ({ label: time, value: time }))} /></td></tr>
                        })
                      }</>}
                    {/* {clinic_details.doctors.map(dr =>
                      <tr><td><a href="#" onClick={this.drHandler(`${dr._id}`)}>{dr.first_name} {dr.last_name}</a></td>{this.props.schedule && <td>{this.props.schedule.map(s => s.time_slot)}</td>}</tr>)} */}
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
    let doctor = doctor_slot[ doctorName ];
    if (!doctor) {
      doctor_slot[ doctorName ] = [];
      doctor = doctor_slot[ doctorName ];
    }
    doctor.push(time_slot);
  });
  return doctor_slot;
}

function mapStateToProps(state) {
  return {
    clinic_details: state.getClinicDetails.clinic_details,
    schedule: state.getSchedule.schedule
  };
}

const mapDispatcherToProps = {
  getSchedule
}

export default connect(mapStateToProps, mapDispatcherToProps)(ClinicPage);