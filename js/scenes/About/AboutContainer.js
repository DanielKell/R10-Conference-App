import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { ActivityIndicator } from "react-native";

import About from "./About";
import { fetchingConduct } from "../../redux/modules/conduct";

class AboutContainer extends Component {
  static route = {
    navigationBar: {
      title: "About"
    }
  };

  componentDidMount() {
    this.props.dispatch(fetchingConduct());
  }

  render() {
    if (this.props.loading) {
      return <ActivityIndicator style={{alignItems: "center", flex: 1}} animating={true} />;
    } else {
      return <About data={this.props.conductData} />;
    }
  }
}

AboutContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  conductData: PropTypes.arrayOf(
    PropTypes.shape({
    loading: PropTypes.bool,
    codeOfConductData: PropTypes.arrayOf(
      PropTypes.shape({
      description: PropTypes.string,
      title: PropTypes.string
      })
    )
  })
  )
};

const mapStateToProps = state => {
  return {
    loading: state.conductData.loading,
    conductData: state.conductData.codeOfConductData
  };
};

export default connect(mapStateToProps)(AboutContainer);
