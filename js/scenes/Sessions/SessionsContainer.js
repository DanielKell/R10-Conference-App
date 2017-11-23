import React, { Component } from 'react';
import Sessions from './Sessions';

class SessionContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Session',
    }
  }

  render() {
    const { sessionData } = this.props;
    return (
      <Sessions sessionData={ sessionData } /> 
    );
  }
}

SessionContainer.propTypes = {
    
}

export default SessionContainer;