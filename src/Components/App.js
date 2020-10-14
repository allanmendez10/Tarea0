/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MainContainer from './MainContainer';

import {ThemeProvider} from 'emotion-theming';

const theme = {
  black: '#000000',
  background: '#ccc',
};

const App: () => React$Node = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <MainContainer></MainContainer>
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
