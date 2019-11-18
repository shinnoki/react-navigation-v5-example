import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNav from './Stack';
import TabNav from './Tab';

export type DrawerParamList = {
  Stack: undefined;
  Tab: undefined;
};

const Drawer = createDrawerNavigator();

const Navigation: React.FC = () => {
  return (
    <Drawer.Navigator initialRouteName="Stack">
      <Drawer.Screen
        name="Stack"
        component={StackNav}
        options={{ drawerLabel: 'Stack' }}
      />
      <Drawer.Screen
        name="Tab"
        component={TabNav}
        options={{ drawerLabel: 'Tab' }}
      />
    </Drawer.Navigator>
  );
};

export default Navigation;
