/**
 * The main component of the app
 * @format
 */

'use strict';
import React from 'react';
import { useTheme } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

import { StackNavigator } from './stack';
import { DrawerContent } from './DrawerContent';

const Drawer = createDrawerNavigator();

export const RootNavigator = () => {
  const theme = useTheme();
  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={navigationTheme}>
      <Drawer.Navigator
        drawerContent={(props: DrawerContentComponentProps) => (
          <DrawerContent {...props} />
        )}>
        <Drawer.Screen
          name="FeedList"
          component={StackNavigator}
          options={{
            // remove the default header
            headerShown: false,
            drawerContentContainerStyle: {
              backgroundColor: theme.colors.surface,
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
