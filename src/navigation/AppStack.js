import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../screens/greeting/welcome';
import Loading from '../screens/greeting/loading';
import ReservePackage from './ReservePackageStake';
import DonoteFood from './DonorStack';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DonoteFood"
        component={DonoteFood}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ReservePackage"
        component={ReservePackage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Loading"
        component={Loading}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
