import React, { Component } from 'react';
import './App.css';
import Login from './Login/Login';

class App extends Component {

  state = {
    persons: [
      { name: "John", age: 45 },
      { name: "Joe", age: 20 }
    ],
    data: "some data"
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 45 },
        { name: "Joe", age: 20 }
      ]
    })
  }

  nameChangeHandler=(event)=>{
    this.setState({
      persons: [
        { name: event.target.value, age: 45 },
        { name: "Joe", age: 20 }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>BODHI</h1>
        <button onClick={this.switchNameHandler.bind(this,"Johny")}>Switch names</button>
        <Login
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          changed={this.nameChangeHandler} />
        <Login
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,"George")}>
          My Hobbies:Drawing</Login>
      </div>
    );
  }
}
export default App;
