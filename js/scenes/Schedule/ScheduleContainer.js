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
import { goToSession } from '../../navigation/navigationHelpers';
class ScheduleContainer extends Component {

    static route = {
        navigationBar: {
        title: 'Schedule',
        }
    }

    constructor() {
        super();
    }

    componentDidMount() {
        this.props.dispatch(fetchingSessions());
    } 

    render() {

    if(this.props.loading) {
        return <ActivityIndicator animating={true}/>
    } else {
        return (
        <Schedule 
            data={this.props.sessionData} 
            currentNavigatorUID={this.props.currentNavigatorUID}   
        />

        )
    }
}
}

ScheduleContainer.propTypes = {

}

const mapStateToProps = (state) => {
    return {
        loading: state.sessionData.loading,
        sessionData: state.sessionData.sessionsData,
        currentNavigatorUID: state.navigation.currentNavigatorUID,
    };
};

export default connect (mapStateToProps)(ScheduleContainer);