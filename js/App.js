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
  NavigationContext
} from '@expo/ex-navigation';
import { Provider } from 'react-redux';

import { Router } from './navigation/routes';
import Store from './redux/store';

const navigationContext = new NavigationContext({
  router: Router,
  store: Store,
})

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext}>
          <StackNavigation 
            navigatorUID="root"
            id="root"
            initialRoute={Router.getRoute('layout')} 
          />
        </NavigationProvider>
      </Provider>
    );
  }
}

