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

function getColor(isSelected) {
  return isSelected ? 'red' : colors.mediumGrey;
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
                style={{color: isSelected ? 'white' : 'red'}}
            > 
                {title}
            </Text>
        )
    }

}

export default NavigationLayout;