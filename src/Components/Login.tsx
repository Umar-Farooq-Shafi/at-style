/**
 * The bag page
 * @format
 */

'use strict';
import Color from 'color';
import React from 'react';
import { Text, View } from 'react-native';
import { TextInput, useTheme } from 'react-native-paper';

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const theme = useTheme();

  const contentColor = Color(theme.colors.text).alpha(0.8).rgb().string();

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        marginTop: 20,
      }}>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <Text
          style={{
            fontSize: 30,
            color: contentColor,
          }}>
          Welcome Back
        </Text>
      </View>
      <View
        style={{
          marginVertical: 10,
          width: '70%',
          alignSelf: 'center',
        }}>
        <TextInput
          label="Email"
          mode="flat"
          value={email}
          onChangeText={e => setEmail(e)}
          style={{
            color: contentColor,
          }}
        />
        <TextInput
          label="Password"
          mode="flat"
          value={password}
          onChangeText={p => setPassword(p)}
          style={{
            color: contentColor,
            marginTop: 10,
          }}
        />
      </View>
    </View>
  );
}

export default Login;
