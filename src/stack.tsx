/**
 * The main component of the app
 * @format
 */

'use strict';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Appbar, Avatar, useTheme } from 'react-native-paper';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { BottomTabs } from './BottomTabs';
import { Details } from './details';
import { StackNavigatorParamList } from './types';

import About from './Components/AboutUs';
import Login from './Components/Login';
import Refer from './Components/Refer';
import Register from './Components/Register';
import Share from './Components/Share';
import Support from './Components/Support';

const Stack = createStackNavigator<StackNavigatorParamList>();

export const StackNavigator = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="BottomTabs"
      screenOptions={{
        headerMode: 'screen',
        header: ({ route, options, progress, navigation }) => {
          const title =
            options.headerTitle !== undefined
              ? options.headerTitle
              : options.title !== undefined
              ? options.title
              : route.name;

          return (
            <Appbar.Header
              theme={{ colors: { primary: theme.colors.surface } }}>
              {progress.previous ? (
                <Appbar.BackAction
                  onPress={navigation.goBack}
                  color={theme.colors.primary}
                />
              ) : (
                <TouchableOpacity
                  style={{ marginLeft: 10 }}
                  onPress={() => {
                    (
                      navigation as any as DrawerNavigationProp<{}>
                    ).openDrawer();
                  }}>
                  <Avatar.Image
                    size={40}
                    source={require('./assets/images/logo.jpg')}
                  />
                </TouchableOpacity>
              )}
              <Appbar.Content
                title={
                  title === 'Feed' ? (
                    <Ionicons
                      style={{ marginRight: 10 }}
                      name="ios-home"
                      size={40}
                      color={theme.colors.primary}
                    />
                  ) : (
                    title
                  )
                }
                titleStyle={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: theme.colors.primary,
                }}
              />
            </Appbar.Header>
          );
        },
      }}>
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

          return { headerTitle: routeName };
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerTitle: 'Details' }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{ headerTitle: 'About Us' }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerTitle: 'Login' }}
      />
      <Stack.Screen
        name="Refer"
        component={Refer}
        options={{ headerTitle: 'Refer' }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerTitle: 'Register' }}
      />
      <Stack.Screen
        name="Share"
        component={Share}
        options={{ headerTitle: 'Share' }}
      />
      <Stack.Screen
        name="Support"
        component={Support}
        options={{ headerTitle: 'Support' }}
      />
    </Stack.Navigator>
  );
};
