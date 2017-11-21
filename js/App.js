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

import {
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

import { Router } from './navigation/routes';

export default class App extends Component<{}> {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('schedule')} />
      </NavigationProvider>
    );
  }
}

