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

import Schedule from './Schedule'
import { fetchingSessions } from '../../redux/modules/sessions';
class ScheduleContainer extends Component {

    static route = {
        navigationBar: {
        title: 'Schedule',
        }
  }

    constructor() {
    super();
    // this.state = { 
    //     isLoading: true,
    //     data: [] };
    }

    componentDidMount() {
        this.props.dispatch(fetchingSessions());
    } 

    // componentDidUpdate() {
    // if (this.state.data && this.state.isLoading) {
    //     this.setState({ isLoading: false});
    //     }
    // }

    render() {

    if(this.props.loading) {
        return <ActivityIndicator animating={true}/>
    } else {

        return (
        <Schedule data={this.props.sessionData}/>

        )
    }
}
}

ScheduleContainer.propTypes = {

}

const mapStateToProps = (state) => {
    return {
        loading: state.sessionData.loading,
        sessionData: state.sessionData.sessionsData
    };
};

export default connect (mapStateToProps)(ScheduleContainer);