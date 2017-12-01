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
      return <ActivityIndicator animating={true} />;
    } else {
      return <About data={this.props.conductData} />;
    }
  }
}

AboutContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.bool
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
