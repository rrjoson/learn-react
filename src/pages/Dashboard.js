import React, { Component } from 'react';
import NewRepoForm from 'components/NewRepoForm';
import RepositoryList from 'containers/RepositoryList';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <NewRepoForm />
        <RepositoryList />
      </div>
    );
  }
}

export default Dashboard;
