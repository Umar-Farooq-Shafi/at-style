/**
 * The bottom tab component, render the home, search, bag, rate us and profile page
 * @format
 */

'use strict';
import React from 'react';

import color from 'color';

// react navigation and re-animated module
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme, Portal, FAB } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useIsFocused, RouteProp } from '@react-navigation/native';

// import { Feed } from './feed';
import { Message } from './message';
import { Notifications } from './notifications';
import { StackNavigatorParamList } from './types';

import overlay from './overlay';
import ProfilePage from './Pages/Profile';
import RateApp from './Pages/RateApp';
import HomeScreen from './Pages/Home';

// bottom tab menu
const Tab = createMaterialBottomTabNavigator();

type Props = {
  route: RouteProp<StackNavigatorParamList, 'FeedList'>;
};

export const BottomTabs = (props: Props) => {
  const routeName = props.route.state
    ? props.route.state.routes[props.route.state.index].name
    : 'Home';

  const theme = useTheme();
  const safeArea = useSafeAreaInsets();
  const isFocused = useIsFocused();

  let icon = 'feather';

  switch (routeName) {
    case 'Home':
      icon = 'home-plus';
      break;
    case 'Search':
      icon = 'shopping-search';
      break;
    case 'Bag':
      icon = 'bag-personal';
      break;
    case 'Rate':
      icon = 'star-plus';
      break;
    case 'Profile':
      icon = 'account-arrow-right';
      break;
    default:
      icon = 'feather';
      break;
  }

  const tabBarColor = theme.dark
    ? (overlay(6, theme.colors.surface) as string)
    : theme.colors.surface;

  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Home"
        backBehavior="initialRoute"
        shifting={true}
        activeColor={theme.colors.primary}
        inactiveColor={color(theme.colors.text).alpha(0.6).rgb().string()}
        sceneAnimationEnabled={false}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: 'home-account',
            tabBarColor,
          }}
        />
        <Tab.Screen
          name="Search"
          component={Notifications}
          options={{
            tabBarIcon: 'magnify',
            tabBarColor,
          }}
        />
        <Tab.Screen
          name="Bag"
          component={Message}
          options={{
            tabBarIcon: 'bag-personal',
            tabBarColor,
          }}
        />
        <Tab.Screen
          name="Rate Us"
          component={RateApp}
          options={{
            tabBarIcon: 'hexagram-outline',
            tabBarColor,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfilePage}
          options={{
            tabBarIcon: 'account-outline',
            tabBarColor,
          }}
        />
      </Tab.Navigator>
      <Portal>
        <FAB
          visible={isFocused}
          icon={icon}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            position: 'absolute',
            bottom: safeArea.bottom + 65,
            right: 16,
          }}
          color="white"
          theme={{
            colors: {
              accent: theme.colors.primary,
            },
          }}
          onPress={() => {}}
        />
      </Portal>
    </React.Fragment>
  );
};
