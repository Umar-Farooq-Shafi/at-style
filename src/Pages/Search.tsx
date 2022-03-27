/**
 * The search page
 * @format
 */

'use strict';
import Color from 'color';
import React from 'react';
import { TextInput, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import normalize from '../Components/Normalize';

function SearchPage() {
  const [search, setSearch] = React.useState('');

  const theme = useTheme();
  const contentColor = Color(theme.colors.text).alpha(0.8).rgb().string();

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: theme.colors.background,
          maxHeight: normalize(40),
          margin: normalize(12),
          borderWidth: 1,
          borderColor: '#2196F3',
          borderRadius: normalize(20),
        }}>
        <TextInput
          onChangeText={setSearch}
          style={{
            color: contentColor,
            fontWeight: '300',
          }}
          value={search}
          placeholderTextColor={contentColor}
          autoFocus
          placeholder="Search T-Shirt, Jeans, Shirts, Frock etc"
        />
        <Ionicons
          name="search-outline"
          size={30}
          style={{
            backgroundColor: theme.colors.background,
            alignSelf: 'center',
          }}
          color={contentColor}
        />
      </View>
    </View>
  );
}

export default SearchPage;
