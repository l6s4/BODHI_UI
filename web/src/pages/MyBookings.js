import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuBar from '../components/MenuBar';
class MyBookings extends Component {
    constructor (props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const { user } = this.props;
        return (
            <div className="myBookings" >
                <div style={{ position: "fixed", left: "0px" }}><MenuBar /></div>
                <form>
                    <div style={{ width: "30%", margin: "auto" }}>
                        <h1>{this.props.bookedStatus}</h1>
                    </div>
                </form>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        bookedStatus: state.createBooking.bookedStatus
    };
}

const mapDispatcherToProps = {
}

export default connect(mapStateToProps, mapDispatcherToProps)(MyBookings);