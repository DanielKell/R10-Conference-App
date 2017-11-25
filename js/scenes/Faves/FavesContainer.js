import React, { Component } from 'react';
import Faves from './Faves'
import { queryFaves } from '../../config/models';
import { connect } from 'react-redux';
import { getAllFaves } from '../../redux/modules/faves';
import realm from '../../config/models';

class FaveContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Favourites',
    }
  }

  componentDidMount = () => {
    this.props.dispatch(getAllFaves());
    realm.addListener('change', this.updateFave);
  }
  updateFave = () => {
    this.props.dispatch(getAllFaves());
  }
  componentWillUnmount = () => {
    realm.removeListener('change', this.updateFave);
  }
  render() {
    const { sessionData, allFavourites } = this.props;
    const faveSession = sessionData.filter(session => {
      return allFavourites.indexOf(session.session_id) >= 0
    });
    return (
      <Faves sessionData={sessionData} faveSession={faveSession} />
    );
  }
}


const mapStateToProps = state => {
  return {
    sessionData: state.sessionData.sessionsData,
    allFavourites: state.favesData.allFavourites
  }
}

export default connect(mapStateToProps)(FaveContainer);