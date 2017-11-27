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

import Speakers from './Speakers'
import { fetchSpeakerData } from '../../redux/modules/speakers';

class SpeakersContainer extends Component {

    static route = {
        navigationBar: {
        title: 'Speakers',
        }
    }

    constructor() {
        super();
    }
    
    render() {

    if(this.props.loading) {
        return <ActivityIndicator animating={true}/>
    } else {

        return (
        <Speakers speakerData={this.props.speaker}/>
        )
    }
}
}

SpeakersContainer.propTypes = {

}

const mapStateToProps = (state) => {
    return {
        loading: state.sessionData.loading,
        speaker: state.speakerData.speakerData
    };
};

export default connect (mapStateToProps)(SpeakersContainer);