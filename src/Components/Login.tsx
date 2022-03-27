/**
 * The bag page
 * @format
 */

'use strict';
import Color from 'color';
import React from 'react';
import { Text, View, TextInput } from 'react-native';

import {
  Card,
  useTheme,
  Paragraph,
  Button,
  Checkbox,
} from 'react-native-paper';
import normalize from './Normalize';

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isSelected, setSelection] = React.useState(false);

  const theme = useTheme();

  const contentColor = Color(theme.colors.text).alpha(0.8).rgb().string();

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        // backgroundColor: theme.colors.background,
        marginTop: 30,
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

        <Text
          style={{
            color: contentColor,
          }}>
          Sign in to continue
        </Text>
      </View>

      <View
        style={{
          marginVertical: 10,
          width: '90%',
          alignSelf: 'center',
        }}>
        <Card>
          <Card.Content>
            <Paragraph
              style={{
                color: contentColor,
              }}>
              Email/Phone
            </Paragraph>
            <TextInput
              value={email}
              onChangeText={e => setEmail(e)}
              placeholder="Enter Phone or Email..."
              placeholderTextColor={contentColor}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#2196F3',
                marginBottom: 10,
              }}
            />

            <Paragraph
              style={{
                color: contentColor,
              }}>
              Password
            </Paragraph>
            <TextInput
              value={password}
              onChangeText={p => setPassword(p)}
              placeholder="Enter Password..."
              placeholderTextColor={contentColor}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#2196F3',
                marginBottom: 10,
              }}
            />

            <View
              style={{
                flexDirection: 'row',
              }}>
              <Checkbox
                status={isSelected ? 'checked' : 'unchecked'}
                onPress={() => setSelection(!isSelected)}
                color="#2196F3"
              />
              <Paragraph
                style={{
                  color: contentColor,
                  marginTop: 7,
                }}>
                Remember me
              </Paragraph>
            </View>
            <View
              style={{
                alignSelf: 'center',
                marginVertical: 10,
              }}>
              <Button
                labelStyle={{
                  fontSize: 12,
                }}
                style={{
                  backgroundColor: '#2196F3',
                  width: 90,
                }}
                mode="contained"
                color={contentColor}>
                Log IN
              </Button>
            </View>

            <Text
              style={{
                alignSelf: 'center',
              }}>
              OR
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginVertical: normalize(8),
                justifyContent: 'space-between',
              }}>
              <Button
                labelStyle={{
                  fontSize: normalize(8),
                  fontWeight: 'bold',
                }}
                mode="text"
                color="#2196F3">
                Forget password
              </Button>
              <Button
                labelStyle={{
                  fontSize: normalize(8),
                  fontWeight: 'bold',
                }}
                mode="text"
                color="#2196F3">
                Login with phone and OTP
              </Button>
            </View>
          </Card.Content>

          <Card.Actions
            style={{
              justifyContent: 'center',
              backgroundColor: theme.colors.background,
            }}>
            <Text
              style={{
                color: contentColor,
              }}>
              Don't have an account?
            </Text>
            <Button
              labelStyle={{
                fontSize: normalize(12),
              }}
              mode="text"
              color="#2196F3">
              Sign UP
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </View>
  );
}

export default Login;
