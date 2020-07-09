import React, { Component } from 'react';
import { connect } from 'react-redux';
import momenttz from "moment-timezone";
import MenuBar from '../components/MenuBar';
import getMyBookings from '../actions/getMyBookings.action';
import './MyBookings.css';
class MyBookings extends Component {
    constructor (props) {
        super(props);
        this.state = {

        };
        this.props.getMyBookings(this.props.loggedUser);
    }
    componentDidMount() {
        console.log("mounted");
        this.props.getMyBookings(this.props.loggedUser);
    }
    render() {
        return (
            <div className="myBookings" >
                <div style={{ position: "fixed", left: "0px" }}><MenuBar /></div>
                <form>
                    <div style={{ width: "30%", margin: "auto" }}>
                        <h1>{this.props.bookedStatus}</h1>
                        <table className="myBookings"><tr><td>Clinic</td>
                            <td>Doctor</td>
                            <td>Time Slot</td>
                            <td>Status</td></tr>
                            {this.props.bookings && this.props.bookings.map(b => {
                                return <tr><td>{b.clinic_name}</td><td>{b.doctor_name}</td><td>{convertToAESTAndTrim(b.time_slot)}</td><td>{b.status}</td></tr>
                            })}</table>
                    </div>
                </form>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        bookedStatus: state.createBooking.bookedStatus,
        loggedUser: state.login.loggedUser,
        bookings: state.getMyBookings.bookings
    };
}
function convertToAESTAndTrim(time) {
    return momenttz.tz(time, "Australia/Sydney").format('HH:mm');
}
const mapDispatcherToProps = {
    getMyBookings
}

export default connect(mapStateToProps, mapDispatcherToProps)(MyBookings);