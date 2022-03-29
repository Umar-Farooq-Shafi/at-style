/**
 * The search page
 * @format
 */

'use strict';
import Color from 'color';
import React from 'react';
import { View, Text, SafeAreaView, TextInput, ScrollView } from 'react-native';
import { Card, useTheme, Paragraph, Button } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';

import normalize from './Normalize';

const data: Array<Object> = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
];

function Register() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [code, setCode] = React.useState('');

  const [secure, setSecure] = React.useState(true);
  const [secure2, setSecure2] = React.useState(true);

  const theme = useTheme();
  const contentColor = Color(theme.colors.text).alpha(0.8).rgb().string();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}>
      <ScrollView
        style={{
          marginTop: normalize(40),
        }}>
        <Text
          style={{
            color: contentColor,
            fontWeight: 'bold',
            fontSize: normalize(25),
            alignSelf: 'center',
          }}>
          Hello There.
        </Text>

        <Text
          style={{
            color: contentColor,
            alignSelf: 'center',
            fontSize: normalize(12),
            fontWeight: '400',
          }}>
          Sign up to continue
        </Text>

        <View
          style={{
            marginVertical: 10,
            width: '90%',
            alignSelf: 'center',
            paddingTop: 10,
            paddingBottom: 30,
          }}>
          <Card>
            <Card.Content>
              <Paragraph
                style={{
                  color: contentColor,
                }}>
                Name*
              </Paragraph>
              <TextInput
                value={name}
                onChangeText={e => setName(e)}
                placeholder="Enter Name"
                placeholderTextColor={contentColor}
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#2196F3',
                  marginBottom: 10,
                  color: contentColor,
                }}
              />

              <Paragraph
                style={{
                  color: contentColor,
                }}>
                Gender*
              </Paragraph>
              <Dropdown
                style={{
                  marginBottom: 10,
                  borderBottomColor: '#2196F3',
                  borderBottomWidth: 1,
                }}
                placeholderStyle={{
                  color: contentColor,
                }}
                selectedTextStyle={{
                  color: contentColor,
                }}
                data={data}
                labelField="label"
                valueField="value"
                placeholder="Select Gender"
                value={gender}
                onChange={item => {
                  setGender(item.value);
                }}
              />

              <Paragraph
                style={{
                  color: contentColor,
                }}>
                Phone*
              </Paragraph>
              <TextInput
                value={phone}
                keyboardType="phone-pad"
                onChangeText={e => setPhone(e)}
                placeholder="Enter Phone"
                placeholderTextColor={contentColor}
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#2196F3',
                  marginBottom: 10,
                  color: contentColor,
                }}
              />

              <Paragraph
                style={{
                  color: contentColor,
                }}>
                Email
              </Paragraph>
              <TextInput
                value={email}
                onChangeText={e => setEmail(e)}
                placeholder="Enter Email"
                placeholderTextColor={contentColor}
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#2196F3',
                  marginBottom: 10,
                  color: contentColor,
                }}
                autoComplete="email"
                textContentType="emailAddress"
              />

              <Paragraph
                style={{
                  color: contentColor,
                }}>
                Password*
              </Paragraph>
              <TextInput
                value={password}
                onChangeText={p => setPassword(p)}
                placeholder="Enter Password"
                placeholderTextColor={contentColor}
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#2196F3',
                  marginBottom: 10,
                  color: contentColor,
                }}
                autoComplete="password-new"
                textContentType="password"
                secureTextEntry={secure}
              />
              {secure && (
                <Ionicons
                  style={{ paddingRight: 15 }}
                  name={secure ? 'eye-outline' : 'eye-off-outline'}
                  size={20}
                  color="#2196F3"
                  onPress={() => setSecure(!secure)}
                />
              )}

              <Paragraph
                style={{
                  color: contentColor,
                }}>
                Confirm Password*
              </Paragraph>
              <TextInput
                value={confirmPassword}
                onChangeText={p => setConfirmPassword(p)}
                placeholder="Confirm Password"
                placeholderTextColor={contentColor}
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#2196F3',
                  marginBottom: 10,
                  color: contentColor,
                }}
                secureTextEntry={secure2}
              />

              <View
                style={{
                  alignSelf: 'center',
                }}>
                <Paragraph
                  style={{
                    color: contentColor,
                  }}>
                  Referral Code
                </Paragraph>
                <TextInput
                  value={code}
                  onChangeText={p => setCode(p)}
                  placeholder="Referral Code"
                  placeholderTextColor={contentColor}
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#2196F3',
                    marginBottom: 10,
                    fontWeight: '300',
                    color: contentColor,
                  }}
                />
              </View>

              <View
                style={{
                  alignSelf: 'center',
                  marginVertical: 10,
                }}>
                <Button
                  labelStyle={{
                    fontSize: normalize(12),
                  }}
                  style={{
                    backgroundColor: '#2196F3',
                    width: normalize(250),
                  }}
                  mode="contained"
                  color={contentColor}>
                  Sign UP
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
                Already have an account?
              </Text>
              <Button
                labelStyle={{
                  fontSize: normalize(12),
                }}
                mode="text"
                color="#2196F3">
                Login IN
              </Button>
            </Card.Actions>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Register;
