import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sessions from './Sessions';
import { fetchSpeakerData } from '../../redux/modules/speakers';

import { queryFaves } from '../../config/models';
import { getAllFaves } from '../../redux/modules/faves';
import realm from '../../config/models';

class SessionContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Session',
    }
  }

  componentDidMount = () => {
    realm.addListener('change', this.updateFave);
    this.props.dispatch(getAllFaves());
    this.props.dispatch(fetchSpeakerData(this.props.sessionData.speaker));
  }
  updateFave = () => {
    this.props.dispatch(getAllFaves());
  }
  componentWillUnmount = () => {
    realm.removeListener('change', this.updateFave);
  }

  render() {
    const { sessionData, speaker, allFavourites } = this.props;

    return (
      <Sessions sessionData={ sessionData } speakerData={ speaker } faves={allFavourites}/> 
    );
  }
}

SessionContainer.propTypes = {
    
}

const mapStateToProps = (state) => {
    return {
        loading: state.sessionData.loading,
        currentNavigatorUID: state.navigation.currentNavigatorUID,
        speaker: state.speakerData.speakerData,
        allFavourites: state.favesData.allFavourites
    };
};

export default connect (mapStateToProps)(SessionContainer);

