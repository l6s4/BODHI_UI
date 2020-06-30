import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuBar from '../components/MenuBar';

class BookAppointment extends Component {
    constructor (props) {
        super(props);

        this.state = {

        }

        this.submitHandler = this.submitHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);

    }
    changeHandler = (event) => {
        this.setState({
            [ event.target.name ]: event.target.value
        });
    }
    submitHandler = (event) => {
        event.preventDefault();
        this.setState({ submitted: true });
        const { email_id, password } = this.state;
        if (email_id.trim().length === 0 || password.trim().length === 0) {
            return;
        }
        console.log(email_id, password);
        this.props.loginFetch(email_id, password);
    }
    signUpHandler = (event) => {
        event.preventDefault();
        this.props.history.push("/createUser");
    }
    render() {
        return (
            <div className="booking">
                <div style={{ position: "fixed", left: "0px" }}><MenuBar /></div>
                <form className="booking-form">
                    <table>
                        <tbody>
                            <tr>
                                <td>Search</td></tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

const mapDispatcherToProps = {
}

export default connect(mapStateToProps, mapDispatcherToProps)(BookAppointment);