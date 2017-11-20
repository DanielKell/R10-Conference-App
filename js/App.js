/**
 * R10 React Native App
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import About from './scenes/About';

export default class App extends Component<{}> {
  render() {
    return (
      <About />
    );
  }
}