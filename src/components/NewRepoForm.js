import React, { Component } from 'react';
import { Input } from 'antd';

class NewRepoForm extends Component {
  render() {
    return (
      <div>
        <h1>NewRepoForm</h1>
        <Input placeholder="Enter your userName" />
      </div>
    );
  }
}

export default NewRepoForm;
