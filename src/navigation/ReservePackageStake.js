import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ReserveMain from '../screens/reservePackage/ReserveMain';
import ReserveLoading from '../screens/reservePackage/loading';
import ReservePackageDetail from '../screens/reservePackage/PacakgeDeatail';
import ReservePackageDonorLocation from '../screens/reservePackage/DonorLocation';
import ReservePackageOrderSuccess from '../screens/reservePackage/OrderPlaceSuccessful';
import OrderStatus from '../screens/reservePackage/OrderStatus';
import SuccessPage from '../screens/reservePackage/SuccessPage';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="ReserveMain">
      <Stack.Screen
        name="ReserveMain"
        component={ReserveMain}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ReservePackageDetail"
        component={ReservePackageDetail}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ReservePackageDonorLocation"
        component={ReservePackageDonorLocation}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ReservePackageOrderSuccess"
        component={ReservePackageOrderSuccess}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="OrderStatus"
        component={OrderStatus}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="SuccessPage"
        component={SuccessPage}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ReserveLoading"
        component={ReserveLoading}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
