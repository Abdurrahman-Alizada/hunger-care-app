import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen2 from '../screens/auth/LoginScreen2';
import LoginScreen from '../screens/auth/LoginScreen';
import CurrentLocation from '../screens/CurrentLocation';
import RegisterScreen from '../screens/auth/RegistrationScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import OTPScreen from '../screens/auth/OTPScreen';
import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen2">
      <Stack.Screen
        name="LoginScreen2"
        component={LoginScreen2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CurrentLocation"
        component={CurrentLocation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OTPScreen"
        component={OTPScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
