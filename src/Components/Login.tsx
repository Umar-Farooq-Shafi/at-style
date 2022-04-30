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

import { Formik } from 'formik';
import * as yup from 'yup';

import AsyncStorage from '@react-native-async-storage/async-storage';

import normalize from './Normalize';

function Login(props: any) {
  const [isSelected, setSelection] = React.useState(false);

  console.log(props);

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
            <Formik
              initialValues={{
                username: '',
                password: '',
              }}
              onSubmit={async (values, action) => {
                try {
                  const fetchCall = await fetch(
                    'http://192.168.10.9:3000/login',
                    {
                      method: 'POST',
                      headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(values),
                    },
                  );
                  const res = await fetchCall.json();

                  if (res.statusCode === 401) {
                    console.log(res.message);
                    action.setStatus('Username or password is incorrect');
                  } else {
                    console.log('Success');
                    await AsyncStorage.setItem('@token', res.access_token);
                    action.resetForm();
                  }
                  action.setSubmitting(false);
                } catch (error: any) {
                  console.error(error);
                  action.setStatus('Internal server error. Try again later');
                }
              }}
              validationSchema={yup.object().shape({
                username: yup.string().required('Username is required'),
                password: yup
                  .string()
                  .min(3, 'Password can not be less than 3 characters.')
                  .max(15, 'Password can not be more than 15 characters.')
                  .required('Password is required'),
              })}>
              {({
                handleChange,
                errors,
                handleSubmit,
                touched,
                status,
                values,
                isValid,
              }) => (
                <>
                  <Paragraph
                    style={{
                      color: contentColor,
                    }}>
                    Username*
                  </Paragraph>
                  <TextInput
                    value={values.username}
                    onChangeText={handleChange('username')}
                    placeholder="Enter Username..."
                    placeholderTextColor={contentColor}
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: '#2196F3',
                      marginBottom: 10,
                      color: contentColor,
                    }}
                  />
                  {errors.username && touched.username && (
                    <Text style={{ color: 'red' }}>{errors.username}</Text>
                  )}

                  <Paragraph
                    style={{
                      color: contentColor,
                    }}>
                    Password
                  </Paragraph>
                  <TextInput
                    value={values.password}
                    onChangeText={handleChange('password')}
                    placeholder="Enter Password..."
                    placeholderTextColor={contentColor}
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: '#2196F3',
                      marginBottom: 10,
                      color: contentColor,
                    }}
                  />
                  {errors.password && touched.password && (
                    <Text style={{ color: 'red' }}>{errors.password}</Text>
                  )}

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

                  {!!status && <Text style={{ color: 'red' }}>{status}</Text>}
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
                      onPress={handleSubmit}
                      disabled={!isValid}
                      mode="contained"
                      color={contentColor}>
                      Log IN
                    </Button>
                  </View>
                </>
              )}
            </Formik>

            <Text
              style={{
                alignSelf: 'center',
                color: contentColor,
              }}>
              OR
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginVertical: normalize(8),
                justifyContent: 'space-between',
                start: normalize(-15),
              }}>
              <Button
                labelStyle={{
                  fontSize: normalize(9),
                  fontWeight: 'bold',
                }}
                mode="text"
                color="#2196F3">
                Forget password
              </Button>
              <Button
                labelStyle={{
                  fontSize: normalize(9),
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
              onPress={() => {
                props.navigation.navigate('Register');
              }}
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
