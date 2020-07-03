import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuBar from '../components/MenuBar';
import ClinicDetails from '../components/ClinicDetails';
import getSchedule from '../actions/getSchedule.action';

class ClinicPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      submitted: false
    }
    this.drHandler = this.drHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  drHandler = (id) => {
    return (event) => {
      console.log(id);
      this.props.getSchedule(id);
    }
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.setState({ submitted: true });
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
                <table>
                  <tbody>
                    <h1><label>{clinic_details.name}</label></h1>
                    <h2>{clinic_details.city} - {clinic_details.postcode}</h2>
                    <p>Email: {clinic_details.email_id}</p><p>Contact No:{clinic_details.contact_no}</p>
                    <h5>{clinic_details.about}</h5>
                    {clinic_details.doctors.map(dr =>
                      <tr><td><a href="#" onClick={this.drHandler(`${dr._id}`)}>{dr.first_name} {dr.last_name}</a></td>{this.props.schedule && <td>{this.props.schedule.map(s => s.time_slot)}</td>}</tr>)}
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