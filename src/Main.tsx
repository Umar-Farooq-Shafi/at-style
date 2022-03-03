/**
 * The main component of the app
 * @format
 */

'use strict';
import React from 'react';

/*
 * Access operating system appearance information on iOS, Android, and web.
 * Currently supports detecting preferred color scheme (light/dark).
 * */
import {
  Provider as PaperProvider,
  DefaultTheme,
  DarkTheme,
} from 'react-native-paper';
import { useColorScheme } from 'react-native-appearance';

import { PreferencesContext } from './context/preferencesContext';
import { RootNavigator } from './RootNavigator';

/**
 * Subscribe to color scheme changes with a hook
 */
function DrawerNavigate() {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = React.useState<'light' | 'dark'>(
    colorScheme === 'dark' ? 'dark' : 'light',
  );

  // toggle theme of the app
  function toggleTheme() {
    setTheme(_theme => (_theme === 'light' ? 'dark' : 'light'));
  }

  // using useMemo to toggle theme of the app
  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      theme,
    }),
    [theme],
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider
        theme={
          theme === 'light'
            ? {
                ...DefaultTheme,
                colors: { ...DefaultTheme.colors, primary: '#1ba1f2' },
              }
            : {
                ...DarkTheme,
                colors: { ...DarkTheme.colors, primary: '#1ba1f2' },
              }
        }>
        <RootNavigator />
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}

export default DrawerNavigate;
