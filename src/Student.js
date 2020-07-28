import React, { Component } from 'react';

class Student extends Component {

  render() {
    return (
      <div >
        <p>----------</p>
        <p>{this.props.info.id}</p>
        <p>{this.props.info.name}</p>
        <p>{this.props.info.yearOfBirth}</p>
      </div>
    );
  }


}

export default Student;