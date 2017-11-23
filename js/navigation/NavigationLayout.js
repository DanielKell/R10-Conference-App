//Working here

import React, { Component } from 'react';

import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { Router } from '../navigation/routes';
import { colors } from '../config/styles';
import BackgroundGradient from '../components/BackgroundGradient/';

function getColor(isSelected) {
  return isSelected ? colors.red : colors.mediumGrey;
}

const defaultRouteConfig = {
  navigationBar: {
    //Need to add font here?
    tintColor: 'white',
    renderBackground: () => (
      <BackgroundGradient colors={[colors.purple, colors.red]} />
    )
  },
}

class NavigationLayout extends Component {

    render() {
        return (
    <TabNavigation
        initialTab="about"
        tabBarColor="black"
        >
        <TabItem
          id="about"
          title="about"
          renderTitle={this.renderTitle}
          renderIcon={isSelected => this.renderIcon("ios-information-circle", getColor(isSelected))}
          >
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute('about')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>

        <TabItem
          id="schedule"
          title="schedule"
          renderTitle={this.renderTitle}
          renderIcon={isSelected => this.renderIcon("ios-calendar", getColor(isSelected))}
        >
          <StackNavigation
            id="schedule"
            initialRoute={Router.getRoute('schedule')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>

        <TabItem
          id="faves"
          title="faves"
          renderTitle={this.renderTitle}
          renderIcon={isSelected => this.renderIcon("ios-calendar", getColor(isSelected))}
        >
          <StackNavigation
            id="faves"
            initialRoute={Router.getRoute('faves')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>

        {/*<TabItem
          id="profile"
          title="Profile"
          selectedStyle={styles.selectedTab}
          renderIcon={(isSelected) => <Image source={require('./assets/images/profile.png')} /> }>
          <StackNavigation
            id="profile"
            initialRoute={Router.getRoute('profile')}
          />
        </TabItem>*/}
      </TabNavigation>
        );
    }

    renderIcon (iconName, isSelected) {
        //Determine what color the icon should be based on isSelected
        // Return the icon component with appropriate props set
        return (
        <Icon name={iconName} size={30} color={isSelected} />
        );
    }

    renderTitle (isSelected, title) {
        return (
            <Text
                style={{color: isSelected ? colors.red : colors.mediumGrey}}
            > 
                {title}
            </Text>
        )
    }

}

export default NavigationLayout;