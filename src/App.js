/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import RootStack from './RootStack';

const App = () => {
  return (
    <View style={styles.container}>
      <RootStack />
    </View>
  );
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
