import React, { Component } from 'react';
import Student from "./Student"

class App extends Component {

  state = {
    data: []
  }

  componentDidMount() {
    fetch('http://localhost:8080/students/all')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ data })
      }
      );
  }

  render() {
    return (
      <div>
        {this.state.data.map(student => <Student info={student}/>)}
      </div>
    );
  }
  

}

export default App;