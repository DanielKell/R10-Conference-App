import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

import About from './About'

class AboutContainer extends Component {

    constructor() {
    super();
    this.state = { 
        isLoading: true,
        data: [] };
    }

    componentDidMount() {
        fetch('https://r10app-95fea.firebaseio.com/code_of_conduct.json')
            .then(response => response.json())
            .then(data => {
            this.setState({data})
            })
            .catch(error => console.log(`Error fetching json`))
    } 

    componentDidUpdate() {
    if (this.state.data && this.state.isLoading) {
        this.setState({ isLoading: false});
        }
    }

    render() {

    if(this.state.isLoading) {
        return <ActivityIndicator animating={true}/>
    } else {

        return (
        <About data={this.state.data}/>

        )
    }
}
}

AboutContainer.propTypes = {

}

export default AboutContainer;