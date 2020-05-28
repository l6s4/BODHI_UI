import React, { Component } from 'react';
import './Input.css'
class Input extends Component {
    render() {
        return <input {...this.props}></input>
    }
}

export default Input;