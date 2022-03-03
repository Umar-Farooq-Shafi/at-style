/**
 * The main component of the app
 * @format
 */

'use strict';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  Drawer,
  Switch,
  Text,
  Title,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { PreferencesContext } from './context/preferencesContext';

import Ionicons from 'react-native-vector-icons/Ionicons';

export function DrawerContent(props: DrawerContentComponentProps) {
  const paperTheme = useTheme();
  const { theme, toggleTheme } = React.useContext(PreferencesContext);

  // shared value for the drawer animation
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value * 255 }],
    };
  });

  return (
    <DrawerContentScrollView {...props}>
      <Animated.View
        //@ts-ignore
        style={[
          animatedStyles,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            backgroundColor: paperTheme.colors.surface,
            flex: 1,
          },
        ]}>
        <View
          style={{
            paddingLeft: 20,
          }}>
          <TouchableOpacity
            style={{
              marginLeft: 10,
              justifyContent: 'center',
            }}
            onPress={() => {
              props.navigation.toggleDrawer();
            }}>
            <Title
              style={{
                marginTop: 20,
                fontWeight: 'bold',
              }}>
              AtStyle
            </Title>
          </TouchableOpacity>
        </View>
        <Drawer.Section
          style={{
            marginTop: 15,
          }}>
          <DrawerItem
            icon={({ color, size }) => (
              <Ionicons name="ios-home-outline" color={color} size={size} />
            )}
            label="Home"
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Ionicons name="ios-person-outline" color={color} size={size} />
            )}
            label="Profile"
            onPress={() => {
              props.navigation.navigate('Profile');
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Ionicons
                name="ios-information-circle-outline"
                color={color}
                size={size}
              />
            )}
            label="About Us"
            onPress={() => {
              props.navigation.navigate('About');
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Ionicons name="ios-headset-outline" color={color} size={size} />
            )}
            label="Support"
            onPress={() => {
              props.navigation.navigate('Support');
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Ionicons
                name="ios-share-social-outline"
                color={color}
                size={size}
              />
            )}
            label="Share App"
            onPress={() => {
              props.navigation.navigate('Share');
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Ionicons name="ios-cash-outline" color={color} size={size} />
            )}
            label="Refer and Earn"
            onPress={() => {
              props.navigation.navigate('Refer');
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Ionicons
                name="ios-lock-closed-outline"
                color={color}
                size={size}
              />
            )}
            label="Login"
            onPress={() => {
              props.navigation.navigate('Login');
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Ionicons
                name="ios-person-add-outline"
                color={color}
                size={size}
              />
            )}
            label="Register"
            onPress={() => {
              props.navigation.navigate('Register');
            }}
          />
        </Drawer.Section>
        <Drawer.Section title="Preferences">
          <TouchableRipple onPress={toggleTheme}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 12,
                paddingHorizontal: 16,
              }}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value={theme === 'dark'} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </Animated.View>
    </DrawerContentScrollView>
  );
}
