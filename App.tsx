import 'react-native-gesture-handler';

import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppearanceProvider } from 'react-native-appearance';

import Main from './src/Main';

import { enableFreeze } from 'react-native-screens';

enableFreeze(true);

export default function App() {
  return (
    <SafeAreaProvider>
      <AppearanceProvider>
        <Main />
      </AppearanceProvider>
    </SafeAreaProvider>
  );
}
