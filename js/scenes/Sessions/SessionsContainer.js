import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sessions from './Sessions';
import { fetchSpeakerData } from '../../redux/modules/speakers';

class SessionContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Session',
    }
  }

    componentDidMount() {
      // const { speaker } = this.props.sessionData;

      this.props.dispatch(fetchSpeakerData(this.props.sessionData.speaker));
      console.log(this.props);
    } 

  render() {
    const { sessionData, speaker } = this.props;
    return (
      <Sessions sessionData={ sessionData } speakerData={ speaker } /> 
    );
  }
}

SessionContainer.propTypes = {
    
}

const mapStateToProps = (state) => {
    return {
        loading: state.sessionData.loading,
        currentNavigatorUID: state.navigation.currentNavigatorUID,
        speaker: state.speakerData.speakerData
    };
};

export default connect (mapStateToProps)(SessionContainer);

// export default SessionContainer