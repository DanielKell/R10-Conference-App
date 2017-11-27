import React, { Component } from 'react';

import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@expo/ex-navigation';
import { Text, View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { Router } from '../navigation/routes';
import { colors, fonts } from '../config/styles';
import BackgroundGradient from '../components/BackgroundGradient/';

const defaultRouteConfig = {
  navigationBar: {
    fontFamily: fonts.fontMainLight,
    tintColor: 'white',
    renderBackground: () => (
      <BackgroundGradient colors={[colors.purple, colors.red]} />
    )
  },
}

class NavigationLayout extends Component {

  render() {
    return (
      <DrawerNavigation
        id='schedule'
        initialItem='schedule'
        drawerWidth={300}
        renderHeader={this._renderHeader}
      >
        <DrawerNavigationItem
          id='schedule'
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('Schedule', isSelected)}
          renderIcon={isSelected => this._renderIcon("md-calendar", isSelected)}
        >
          <StackNavigation
            id='schedule'
            initialRoute={Router.getRoute('schedule')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id='faves'
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('Faves', isSelected)}
          renderIcon={isSelected => this._renderIcon("md-heart", isSelected)}
        >
          <StackNavigation
            id='faves'
            initialRoute={Router.getRoute('faves')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id='about'
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('About', isSelected)}
          renderIcon={isSelected => this._renderIcon("md-information-circle", isSelected)}
        >
          <StackNavigation
            id='about'
            initialRoute={Router.getRoute('about')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerNavigationItem>

      </DrawerNavigation>
    );
  }

  _renderHeader = () => {
    return (
      <View style={styles.header}>
      </View>
    );
  };

  _renderTitle(text: string, isSelected: boolean) {
    return (
      <Text style={[styles.titleText, isSelected ? styles.selectedTitleText : {}]}>
        {text}
      </Text>
    );
  }

  _renderIcon(iconName, isSelected) {
    const color = isSelected ? colors.purple : colors.mediumGrey;
    return <Icon name={iconName} color={color} size={22}  />
  }
}

const styles = StyleSheet.create({
  header: {
    height: 20
  },

  selectedItemStyle: {
    backgroundColor: colors.lightGrey
  },

  titleText: {
    fontWeight: 'bold',
    marginLeft: 12,
    fontFamily: fonts.fontMainReg
  },

  selectedTitleText: {
    color: colors.purple
  }
});

export default NavigationLayout;