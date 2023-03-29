import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ForgotPassword from './../screens/ForgotPassword';
import Login from './../screens//Login';
import * as React from 'react';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from './../store/slice';
import ThemeController from '../components/ThemeController';
import BottomTabNavigation from './BottomTabNavigation';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useTheme} from 'react-native-paper';
// import {useTranslation} from 'react-i18next';

import Drawer from './Drawer';
const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const AppDrawer = createDrawerNavigator();

const homeOptions: any = {
  headerRight: () => <ThemeController />,
};

const AuthNavigator = () => {
  //   const {t} = useTranslation();
  const theme = useTheme();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </AuthStack.Navigator>
  );
};

const LoggedInNavigator = () => {
  const theme = useTheme();

  return (
    <AppDrawer.Navigator drawerContent={() => <Drawer />}>
      <AppDrawer.Screen
        name={'Home'}
        component={BottomTabNavigation}
        options={{
          drawerLabel: 'Gsoft Boiler Plate',
          headerStyle: {
            backgroundColor: theme.colors.accent, //Set Header color
          },
          headerTintColor: theme.colors.primary, //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </AppDrawer.Navigator>
  );
};
const App: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  return (
    <NavigationContainer>
      <StatusBar />
      {isLoggedIn ? <LoggedInNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default App;
