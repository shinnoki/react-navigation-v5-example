import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { StackParamList } from './';
import { DrawerParamList } from '../';

type ProfileScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<StackParamList, 'Profile'>,
  DrawerNavigationProp<DrawerParamList>
>;

type ProfileScreenRouteProp = RouteProp<StackParamList, 'Profile'>;

type Props = {
  navigation: ProfileScreenNavigationProp;
  route: ProfileScreenRouteProp;
};

const ProfileScreen: React.FC<Props> = props => {
  const { navigation, route } = props;

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfileScreen;
