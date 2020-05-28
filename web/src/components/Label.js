import React, { Component } from 'react';
import './Label.css'
class Label extends Component {
    render() {
        return <label className="user_label" {...this.props}></label>
    }
}

export default Label;