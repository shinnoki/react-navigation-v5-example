import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './src/screens';
import { NavigationContainer } from '@react-navigation/core';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
