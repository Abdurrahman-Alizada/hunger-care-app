import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DonationPost from '../screens/DonorScreens/DonationPost';
import DonationPost2 from '../screens/DonorScreens/DonationPost2';
import DonorMainPage from '../screens/DonorScreens/MainPage';
import RecentDonation from '../screens/DonorScreens/RecentDonation';

const Stack = createStackNavigator();

const DonorStack = () => {
  const [previousDonation, setPreviousDonation] = useState(false);
  return (
    <Stack.Navigator
      initialRouteName={previousDonation ? 'RecentDonation' : 'DonorMainPage'}>
      <Stack.Screen
        name="DonorMainPage"
        title="Donations"
        component={DonorMainPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RecentDonation"
        component={RecentDonation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DonationPost"
        component={DonationPost}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DonationPost2"
        component={DonationPost2}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default DonorStack;
