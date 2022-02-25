import 'react-native-gesture-handler';
import React from 'react';

// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Import Screens
import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';

// import Main from './src/navigation/AppStack'; //main application stack
import Main from './src/navigation/Drawer'; //Drawer application stack
import Auth from './src/navigation/AuthStack'; //Authentication routes
import Location from './src/navigation/LocationStack';
import DonorStack from './src/navigation/DonorStack';

const Stack = createStackNavigator();

// i18n
import './src/assets/i18n/index';

/* Switch Navigator for those screens which needs to be switched only once
 and we don't want to switch back once we switch from them to the next one */
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        {/* Auth Navigator which includer Login Signup will come once */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        {/* onboarding screen for first time open */}
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
        {/* location and map screens for selecing area */}
        <Stack.Screen
          name="Location"
          component={Location}
          options={{headerShown: false, presentation: 'modal'}}
        />
        {/* Navigation Drawer as a landing page */}
        {/* <Stack.Screen
          name="Drawer"
          component={Drawer}
          options={{headerShown: false}} // Hiding header for Navigation Drawer as we are using our custom header from react-native-paper
        /> */}
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
