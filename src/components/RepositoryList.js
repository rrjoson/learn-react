import React, { Component } from 'react';
import autobind from 'react-autobind';

import RepositoryListItem from './RepositoryListItem';

class RepositoryList extends Component {
  constructor(props) {
    super(props);
    autobind(this);

    this.state = {
      repositoryNames: [
        "facebook/react",
        "vuejs/vue",
        "angular/angular",
      ],
    };
  }

  render() {
    const repositoryItems = this.state.repositoryNames.map( name => {
      return <RepositoryListItem key={name} repositoryName={name} />
    });

    return (
      <div className="section">
        {repositoryItems}
      </div>
    );
  }
}

export default RepositoryList;
