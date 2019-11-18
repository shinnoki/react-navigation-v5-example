import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation, CompositeNavigationProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { StackParamList } from './';
import { DrawerParamList } from '../';

type HomeScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<StackParamList, 'Home'>,
  DrawerNavigationProp<DrawerParamList>
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  navigation.setOptions({});
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate('Notifications')}>
        Notifications
      </Text>
      <Text onPress={() => navigation.navigate('Profile', { id: '1' })}>
        Profile
      </Text>
      <Text onPress={() => navigation.navigate('Settings')}>Settings</Text>
      <Text onPress={() => navigation.openDrawer()}>Open Drawer</Text>
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

export default HomeScreen;
