import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import MenuBar from '../components/MenuBar';
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
    console.log(this.state.startDate);
    const given_date = moment(this.state.startDate).format("YYYY-MM-DD");
    console.log(given_date);
    this.props.getSchedule(this.props.clinic_details._id, given_date);
  }
  render() {
    const { clinic_details } = this.props;
    return (
      <div className="clinic">
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
                    <tr><td><div>{this.props.schedule && <td>{this.props.schedule.map(s => s.time_slot)}</td>}</div></td></tr>
                    {/* {clinic_details.doctors.map(dr =>
                      <tr><td><a href="#" onClick={this.drHandler(`${dr._id}`)}>{dr.first_name} {dr.last_name}</a></td>{this.props.schedule && <td>{this.props.schedule.map(s => s.time_slot)}</td>}</tr>)} */}
                  </tbody>
                </table>
              </ClinicDetails>
            </>}
          </div>
        </form>
      </div>
    );
  }
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