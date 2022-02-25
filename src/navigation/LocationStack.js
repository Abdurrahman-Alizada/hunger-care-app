import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../screens/location/welcome';
import LocateMe from '../screens/location/locateMe';
import ProvideLocation from '../screens/location/provideLocation';

const Stack = createStackNavigator();

const LocationStack = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LocateMe"
        component={LocateMe}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProvideLocation"
        component={ProvideLocation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default LocationStack;
