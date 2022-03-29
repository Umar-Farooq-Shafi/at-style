/**
 * The rate the application page
 * @format
 */

'use strict';
import Color from 'color';
import React from 'react';
import { Text, ToastAndroid, View } from 'react-native';
import { Button, Card, Divider, useTheme } from 'react-native-paper';
import Clipboard from '@react-native-clipboard/clipboard';

import normalize from './Normalize';

function Share() {
  const theme = useTheme();
  const contentColor = Color(theme.colors.text).alpha(0.8).rgb().string();

  const [text, setText] = React.useState('Copy to clipboard');

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Card
        style={{
          margin: normalize(10),
        }}>
        <Card.Content>
          <Text
            style={{
              color: contentColor,
              fontWeight: 'bold',
              fontSize: normalize(20),
              textAlign: 'center',
            }}>
            Share this app to your friends or family
          </Text>
          <Divider
            style={{
              marginVertical: 10,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: '#2196F3',
              borderRadius: normalize(5),
              margin: 10,
              padding: 4,
            }}>
            <Text style={{ color: contentColor }}>http://www.google.com/ </Text>
          </View>
          <View
            style={{
              alignSelf: 'center',
            }}>
            <Button
              mode="contained"
              color={contentColor}
              style={{
                backgroundColor: '#2196F3',
                width: normalize(140),
                marginVertical: 10,
              }}
              labelStyle={{
                fontSize: normalize(10),
              }}
              onPress={() => {
                Clipboard.setString('http://www.google.com/');
                setText('Copied');
                setTimeout(() => {
                  setText('Copy to clipboard');
                }, 4000);
                ToastAndroid.showWithGravityAndOffset(
                  'Copied to clipboard',
                  ToastAndroid.LONG,
                  ToastAndroid.BOTTOM,
                  25,
                  50,
                );
              }}>
              {text}
            </Button>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
}

export default Share;
