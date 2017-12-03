import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ActivityIndicator } from "react-native";

import Schedule from "./Schedule";
import { fetchingSessions } from "../../redux/modules/sessions";
import { getAllFaves } from "../../redux/modules/faves";
class ScheduleContainer extends Component {
  static route = {
    navigationBar: {
      title: "Schedule"
    }
  };

  componentDidMount() {
    this.props.dispatch(fetchingSessions());
    this.props.dispatch(getAllFaves());
  }

  render() {
    if (this.props.loading) {
      return <ActivityIndicator style={{alignItems: "center", flex: 1}} animating={true} />;
    } else {
      return (
        <Schedule
          data={this.props.sessionData}
          currentNavigatorUID={this.props.currentNavigatorUID}
          faves={this.props.allFavourites}
        />
      );
    }
  }
}

ScheduleContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  currentNavigatorUID: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.number.isRequired,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          location: PropTypes.string,
          title: PropTypes.string,
          start_time: PropTypes.number,
          description: PropTypes.string,
          session_id: PropTypes.string,
          speaker: PropTypes.string
        })
      )}
    )
  ),
  faves: PropTypes.arrayOf(
    PropTypes.string
  ),
  allFavourites: PropTypes.arrayOf(
    PropTypes.string
  ),
}

const mapStateToProps = state => {
  return {
    loading: state.sessionData.loading,
    sessionData: state.sessionData.sessionsData,
    currentNavigatorUID: state.navigation.currentNavigatorUID,
    allFavourites: state.favesData.allFavourites
  };
};

export default connect(mapStateToProps)(ScheduleContainer);
