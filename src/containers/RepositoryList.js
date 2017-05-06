import React, { Component } from 'react';
import { connect } from 'react-redux';
import autobind from 'react-autobind';

import RepositoryListItem from 'components/RepositoryListItem';

class RepositoryList extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  render() {
    const repositoryItems = this.props.repositories.map( ({name}) => {
      return (
        <RepositoryListItem 
          key={name} 
          repositoryName={name} 
        />
      )
    });

    return (
      <div className="section">
        {repositoryItems}
      </div>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of RepositoryList
  return {
    repositories: state.repositories,
  };
} 

export default connect(mapStateToProps)(RepositoryList);
