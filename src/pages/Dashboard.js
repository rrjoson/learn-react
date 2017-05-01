import React, { Component } from 'react';
import NewRepoForm from '../components/NewRepoForm';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <NewRepoForm />
      </div>
    );
  }
}

export default Dashboard;
