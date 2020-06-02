import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import "./ModalWindow.css";
class ModalWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show:"block",
      open:false,
      closed:false
    }
  }
  closehandler=()=>{
    this.setState({
      show:"none",
      closed:true,
      open:true
    })

  }
  render() {
    if(this.state.open && this.state.closed) {
      return <Redirect to="/login" />
    }
    return (
      <div>
        <div id="myModal" className="modal" style={{display:this.state.show}}>
          <div className="modal-content" >
            <span className="close" onClick={this.closehandler}>&times;</span>
            <p>Created</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalWindow;