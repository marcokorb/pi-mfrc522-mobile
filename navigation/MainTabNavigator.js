import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import SettingsScreen from '../screens/SettingsScreen';
import ReadTagScreen from '../screens/ReadTagScreen';
import WriteToTagScreen from '../screens/WriteToTagScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const ReadTagStack = createStackNavigator(
  {
    ReadTag: ReadTagScreen,
  },
  config
);

ReadTagStack.navigationOptions = {
  tabBarLabel: 'Read',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

ReadTagStack.path = '';

const WriteTagStack = createStackNavigator(
  {
    WriteToTag: WriteToTagScreen,
  },
  config
);

WriteTagStack.navigationOptions = {
  tabBarLabel: 'Write',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

WriteTagStack.path = '';

const tabNavigator = createBottomTabNavigator({
  SettingsStack,
  ReadTagStack,
  WriteTagStack
});

tabNavigator.path = '';

export default tabNavigator;
