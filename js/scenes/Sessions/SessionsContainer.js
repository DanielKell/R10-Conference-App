import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Sessions from "./Sessions";
import { fetchSpeakerData } from "../../redux/modules/speakers";
import { getAllFaves } from "../../redux/modules/faves";
import realm from "../../config/models";

class SessionContainer extends Component {
  static route = {
    navigationBar: {
      title: "Session"
    }
  };

  componentDidMount = () => {
    realm.addListener("change", this.updateFave);
    this.props.dispatch(getAllFaves());
    this.props.dispatch(fetchSpeakerData(this.props.sessionData.speaker));
  };
  updateFave = () => {
    this.props.dispatch(getAllFaves());
  };
  componentWillUnmount = () => {
    realm.removeListener("change", this.updateFave);
  };

  render() {
    const { sessionData, speaker, allFavourites } = this.props;

    return (
      <Sessions
        sessionData={sessionData}
        speakerData={speaker}
        faves={allFavourites}
      />
    );
  }
}

SessionContainer.propTypes = {
  sessionData: PropTypes.shape({
    location: PropTypes.string,
    title: PropTypes.string,
    start_time: PropTypes.number,
    description: PropTypes.string,
    speaker: PropTypes.string,
    session_id: PropTypes.string,
  }),
  loading: PropTypes.bool.isRequired,
  speaker: PropTypes.shape({
      bio: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
      speaker_id: PropTypes.string,
      session: PropTypes.string,
      url: PropTypes.string
  }),
  dispatch: PropTypes.func,
  allFavourites: PropTypes.arrayOf(
    PropTypes.string
  )
}

const mapStateToProps = state => {
  return {
    loading: state.sessionData.loading,
    currentNavigatorUID: state.navigation.currentNavigatorUID,
    speaker: state.speakerData.speakerData,
    allFavourites: state.favesData.allFavourites
  };
};

export default connect(mapStateToProps)(SessionContainer);
