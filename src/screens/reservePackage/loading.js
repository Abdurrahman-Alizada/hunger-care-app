// Import React and Component
import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true); //State for ActivityIndicator animation

  useEffect(() => {
    setTimeout(async () => {
      setAnimating(false);
      AsyncStorage.getItem('user_id').then(value => {
        navigation.navigate('ReserveMain');
      });
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Image
        source={require('../../assets/images/ReservePackage/Group.png')}
        style={styles.Image}
      />
      <ActivityIndicator
        animating={animating}
        color="#877474"
        size="large"
        style={styles.activityIndicator}
      />
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
});
