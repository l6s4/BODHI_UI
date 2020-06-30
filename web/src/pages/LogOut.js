import React, { Component } from 'react';
import logout from '../actions/logout.action';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
class LogOut extends Component {
    constructor (props) {
        super(props);
        this.props.logout();
    }

    render() {
        return <Redirect to="/login" />
    }
}

function mapStateToProps(state) {
    return {
        loggedIn: state.login.loggedIn,
        loggedOut: state.loggedOut
    };
}

const mapDispatcherToProps = {
    logout
}

export default connect(mapStateToProps, mapDispatcherToProps)(LogOut);