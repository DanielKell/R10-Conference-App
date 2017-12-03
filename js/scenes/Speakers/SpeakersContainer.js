import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavigationStyles } from "@expo/ex-navigation";

import { ActivityIndicator } from "react-native";

import Speakers from "./Speakers";
class SpeakersContainer extends Component {
  static route = {
    navigationBar: {
      title: "Speakers"
    },
    styles: {
      ...NavigationStyles.SlideVertical
    }
  };

  render() {
    if (this.props.loading) {
      return <ActivityIndicator style={{alignItems: "center", flex: 1}} animating={true} />;
    } else {
      return <Speakers speakerData={this.props.speaker} />;
    }
  }
}

SpeakersContainer.propTypes = {
  speaker: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
    url: PropTypes.url
  }),
  loading: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    loading: state.sessionData.loading,
    speaker: state.speakerData.speakerData
  };
};

export default connect(mapStateToProps)(SpeakersContainer);
