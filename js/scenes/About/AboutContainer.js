import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';

import About from './About';
import { fetchingConduct } from '../../redux/modules/conduct';

class AboutContainer extends Component {

    static route = {
        navigationBar: {
        title: 'About',
        }
  }

    constructor() {
    super();

    this.state = {
        showText: false
    }

}

show = () => {
  // LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
//   LayoutAnimation.configureNext(animationConfig);
  this.setState({ showText: true });
}

    componentDidMount() {
        this.props.dispatch(fetchingConduct());
    } 

    render() {

    if(this.props.loading) {
        return <ActivityIndicator animating={true}/>
    } else {

        return (
        <About data={this.props.conductData} showText={this.showText}/>
        )
    }
}
}

AboutContainer.propTypes = {

}

const mapStateToProps = (state) => {
    return {
        loading: state.conductData.loading,
        conductData: state.conductData.codeOfConductData
    };
};

export default connect (mapStateToProps)(AboutContainer);

