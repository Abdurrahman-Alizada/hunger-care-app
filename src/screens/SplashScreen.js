// Import React and Component
import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, Image, Text, StatusBar} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true); //State for ActivityIndicator animation
  const isAppFirstLaunched = useRef(true); //onboarding screen decision

  useEffect(() => {
    const firstLaunch = async () => {
      const appData = await AsyncStorage.getItem('isAppFirstLaunched1').then(
        value => value,
      );

      console.log(appData);
      if (appData) {
        isAppFirstLaunched.current = false;
      } else {
        isAppFirstLaunched.current = true;
        await AsyncStorage.setItem('isAppFirstLaunched1', '1');
      }
    };
    firstLaunch();
  }, []);

  useEffect(() => {
    setTimeout(async () => {
      setAnimating(false);
      //Check if user_id is set or not If not then send for Authentication else send to Home Screen
      AsyncStorage.getItem('user_id').then(value => {
        console.log(isAppFirstLaunched);
        console.log(value, 'This is Value');
        isAppFirstLaunched.current
          ? navigation.replace('Onboarding')
          : navigation.replace(value === null ? 'Main'  : 'Auth') 
      });
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Image source={require('../assets/logo.png')} style={styles.image} />
      <Text
        style={{
          color: '#D70F64',
          fontSize: 20,
          marginTop: 20,
          letterSpacing: 2,
        }}>
        Let's Feed the needy
      </Text>
      {/* below is loader not decided yet to use it or not */}
      {/* <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      /> */}
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },

  image: {width: 260, height: 260, resizeMode: 'stretch'},
});
