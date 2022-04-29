/**
 * The search page
 * @format
 */

'use strict';
import Color from 'color';
import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Alert } from 'react-native';
import {
  Card,
  useTheme,
  Paragraph,
  Button,
  TextInput,
} from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';

import { Formik } from 'formik';
import * as yup from 'yup';

import normalize from './Normalize';

const data: Array<Object> = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
];

function Register() {
  const [gender, setGender] = React.useState('');

  const [securePassword, setSecurePassword] = React.useState(true);
  const [secureConfirmPassword, setSecureConfirmPassword] =
    React.useState(true);

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
              <Formik
                initialValues={{
                  name: '',
                  phone: '',
                  email: '',
                  password: '',
                  repeatPassword: '',
                  code: '',
                  gender: '',
                }}
                onSubmit={async (values, action) => {
                  console.log('first');
                  values.gender = gender;
                  Alert.alert(JSON.stringify(values));
                  try {
                    const fetchCall = await fetch(
                      'http://192.168.10.9:3000/api/user',
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

                    console.log(res);
                    action.setSubmitting(false);
                  } catch (error: any) {
                    console.log(error);
                    action.setStatus('Internal Server Error. Try again later');
                  }
                }}
                validate={() => ({})}
                validationSchema={yup.object().shape({
                  name: yup.string().required('Name is required'),
                  email: yup.string().email().required('Email is required'),
                  phone: yup
                    .string()
                    .required()
                    .matches(/^[0-9]+$/, 'Must be only digits')
                    .min(11, 'Must be 11 digits')
                    .max(13, 'Must be 13 digits'),
                  password: yup
                    .string()
                    .min(3, 'Password can not be less than 3 characters.')
                    .max(15, 'Password can not be more than 15 characters.')
                    .required('Password is required'),
                  confirmPassword: yup
                    .string()
                    .oneOf([yup.ref('password'), null], 'Passwords must match')
                    .required('Confirm Password is required'),
                  code: yup.string(),
                })}>
                {({
                  handleChange,
                  errors,
                  handleSubmit,
                  touched,
                  values,
                  isValid,
                }) => (
                  <>
                    {/* name input */}
                    <Paragraph
                      style={{
                        color: contentColor,
                      }}>
                      Name*
                    </Paragraph>
                    <TextInput
                      value={values.name}
                      onChangeText={handleChange('name')}
                      placeholder="Enter Name"
                      placeholderTextColor={contentColor}
                      style={{
                        marginBottom: 10,
                        color: contentColor,
                        backgroundColor: theme.colors.background,
                      }}
                    />
                    {touched.name && errors.name && (
                      <Text style={{ fontSize: 11, color: 'red' }}>
                        {errors.name}
                      </Text>
                    )}

                    {/* gender dropdown */}
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
                        backgroundColor: theme.colors.background,
                      }}
                      placeholderStyle={{
                        color: contentColor,
                        backgroundColor: theme.colors.background,
                      }}
                      selectedTextStyle={{
                        color: contentColor,
                        backgroundColor: theme.colors.background,
                      }}
                      containerStyle={{
                        backgroundColor: theme.colors.background,
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

                    {/* phone input */}
                    <Paragraph
                      style={{
                        color: contentColor,
                      }}>
                      Phone*
                    </Paragraph>
                    <TextInput
                      value={values.phone}
                      keyboardType="phone-pad"
                      onChangeText={handleChange('phone')}
                      placeholder="Enter Phone"
                      placeholderTextColor={contentColor}
                      style={{
                        marginBottom: 10,
                        backgroundColor: theme.colors.background,
                        color: contentColor,
                      }}
                    />
                    {touched.phone && errors.phone && (
                      <Text style={{ fontSize: 11, color: 'red' }}>
                        {errors.phone}
                      </Text>
                    )}

                    {/* email input */}
                    <Paragraph
                      style={{
                        color: contentColor,
                      }}>
                      Email
                    </Paragraph>
                    <TextInput
                      value={values.email}
                      onChangeText={handleChange('email')}
                      placeholder="Enter Email"
                      placeholderTextColor={contentColor}
                      style={{
                        marginBottom: 10,
                        backgroundColor: theme.colors.background,
                        color: contentColor,
                      }}
                      autoComplete="email"
                      textContentType="emailAddress"
                    />
                    {touched.email && errors.email && (
                      <Text style={{ fontSize: 11, color: 'red' }}>
                        {errors.email}
                      </Text>
                    )}

                    {/* password input */}
                    <Paragraph
                      style={{
                        color: contentColor,
                      }}>
                      Password*
                    </Paragraph>
                    <TextInput
                      value={values.password}
                      onChangeText={handleChange('password')}
                      placeholder="Enter Password"
                      placeholderTextColor={contentColor}
                      style={{
                        marginBottom: 10,
                        color: contentColor,
                        backgroundColor: theme.colors.background,
                      }}
                      mode="flat"
                      textContentType="password"
                      secureTextEntry={securePassword}
                      right={
                        securePassword ? (
                          <TextInput.Icon
                            name="eye"
                            onPress={() => setSecurePassword(!securePassword)}
                          />
                        ) : (
                          <TextInput.Icon
                            name="eye-off"
                            onPress={() => setSecurePassword(!securePassword)}
                          />
                        )
                      }
                    />
                    {touched.password && errors.password && (
                      <Text style={{ fontSize: 11, color: 'red' }}>
                        {errors.password}
                      </Text>
                    )}

                    {/* confirm password input */}
                    <Paragraph
                      style={{
                        color: contentColor,
                      }}>
                      Confirm Password*
                    </Paragraph>
                    <TextInput
                      value={values.repeatPassword}
                      onChangeText={handleChange('repeatPassword')}
                      placeholder="Confirm Password"
                      placeholderTextColor={contentColor}
                      style={{
                        marginBottom: 10,
                        color: contentColor,
                        backgroundColor: theme.colors.background,
                      }}
                      textContentType="password"
                      mode="flat"
                      secureTextEntry={secureConfirmPassword}
                      right={
                        secureConfirmPassword ? (
                          <TextInput.Icon
                            name="eye"
                            onPress={() =>
                              setSecureConfirmPassword(!secureConfirmPassword)
                            }
                          />
                        ) : (
                          <TextInput.Icon
                            name="eye-off"
                            onPress={() =>
                              setSecureConfirmPassword(!secureConfirmPassword)
                            }
                          />
                        )
                      }
                    />
                    {touched.repeatPassword && errors.repeatPassword && (
                      <Text style={{ fontSize: 11, color: 'red' }}>
                        {errors.repeatPassword}
                      </Text>
                    )}

                    <Paragraph
                      style={{
                        color: contentColor,
                      }}>
                      Referral Code
                    </Paragraph>
                    <View
                      style={{
                        alignSelf: 'center',
                        height: 60,
                      }}>
                      <TextInput
                        value={values.code}
                        onChangeText={handleChange('code')}
                        placeholder="Referral Code"
                        placeholderTextColor={contentColor}
                        style={{
                          fontWeight: '300',
                          color: contentColor,
                          backgroundColor: theme.colors.background,
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
                        disabled={!isValid}
                        onPress={handleSubmit}
                        color={contentColor}>
                        Sign UP
                      </Button>
                    </View>
                  </>
                )}
              </Formik>
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
