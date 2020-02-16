import React from 'react';
import { StatusBar } from 'react-native';

import { colors } from '~/styles/index';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={colors.background}
      />
      <Routes />
    </>
  );
}
