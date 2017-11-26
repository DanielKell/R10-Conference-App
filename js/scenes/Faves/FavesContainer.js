import React, { Component } from 'react';
import Faves from './Faves'
import { queryFaves } from '../../config/models';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';

import { getAllFaves } from '../../redux/modules/faves';
import realm from '../../config/models';
import { fetchingSessions } from '../../redux/modules/sessions';

class FaveContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Favourites',
    }
  }

  componentDidMount = () => {
    this.props.dispatch(getAllFaves());
    realm.addListener('change', this.updateFave);
    this.props.dispatch(fetchingSessions());
  }
  updateFave = () => {
    this.props.dispatch(getAllFaves());
  }
  componentWillUnmount = () => {
    realm.removeListener('change', this.updateFave);
  }
  render() {
    const { sessionData, allFavourites } = this.props;

    const newFaves = [];

    for (let i = 0; i < sessionData.length; i++) {
      newFaves.push(sessionData[i].data[0])
    }

    const faveSessions = newFaves.filter(session => {
      return allFavourites.indexOf(session.session_id) >= 0
    })


    if(this.props.loading) {
        return <ActivityIndicator animating={true}/>
    } else {
        return (
          <Faves faveSession={faveSessions} 
          currentNavigatorUID={this.props.currentNavigatorUID}
          />
        );
    }
  }
}


const mapStateToProps = state => {
  return {
    loading: state.sessionData.loading,
    sessionData: state.sessionData.sessionsData,
    allFavourites: state.favesData.allFavourites,
    currentNavigatorUID: state.navigation.currentNavigatorUID
  }
}

export default connect(mapStateToProps)(FaveContainer);