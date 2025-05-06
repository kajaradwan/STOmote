import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

// Import screens (we'll create these next)
import HomeScreen from '../screens/HomeScreen';
import ChecklistScreen from '../screens/ChecklistScreen';
import ControlsScreen from '../screens/ControlsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TankStatusScreen from '../screens/TankStatusScreen';
import ACControlScreen from '../screens/ACControlScreen';
import VentControlScreen from '../screens/VentControlScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1A1B4B',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Checklist" component={ChecklistScreen} />
        <Stack.Screen name="Controls" component={ControlsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="TankStatus" component={TankStatusScreen} />
        <Stack.Screen name="ACControl" component={ACControlScreen} />
        <Stack.Screen name="VentControl" component={VentControlScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}; 