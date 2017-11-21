//Working here

import React, { Component } from 'react';

import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';

import { Router } from '../navigation/routes';

class NavigationLayout extends Component {

    render() {
        return (
    <TabNavigation

        initialTab="about">

        <TabItem
          id="about"
          title="about">
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute('about')}
          />
        </TabItem>

        <TabItem
          id="schedule"
          title="schedule"
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
}

export default NavigationLayout;