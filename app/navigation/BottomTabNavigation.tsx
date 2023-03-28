import * as React from 'react';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'react-native-paper';

const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarStyle: {
          backgroundColor: theme.colors.accent,
          borderRadius: 20,
          position: 'absolute',
          margin: 10,
          marginBottom: 20,
          alignItems: 'center',
          height: 70,
          justifyContent: 'center',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerStyle: {backgroundColor: theme.colors.primary},
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-circle-outline" color={color} size={size} />
          ),
          headerStyle: {backgroundColor: theme.colors.primary},
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigation;
