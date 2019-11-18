import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

let tabCount = 2;

const TabNav: React.FC = () => {
  const [tabs, setTabs] = useState(['Tab1', 'Tab2']);
  const addTab = useCallback(() => {
    setTabs(prevTabs => prevTabs.concat('Tab' + ++tabCount));
  }, []);
  const removeTab = useCallback((tab: string) => {
    setTabs(prevTabs => prevTabs.filter(prevTab => prevTab !== tab));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator tabBarOptions={{ scrollEnabled: true }}>
        {tabs.map(tab => (
          <Tab.Screen
            key={tab}
            name={tab}
            component={() => (
              <View>
                <Text>{tab}</Text>
                <Text onPress={addTab}>Add New Tab</Text>
                <Text onPress={() => removeTab(tab)}>Remove This Tab</Text>
              </View>
            )}
          />
        ))}
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default TabNav;
