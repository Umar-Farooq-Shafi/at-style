import React from 'react';

interface PreferencesContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const PreferencesContext = React.createContext<PreferencesContextType>({
  theme: 'light',
  toggleTheme: () => {},
});
