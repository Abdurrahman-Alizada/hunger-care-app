import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  StatusBar,
  Image,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export default function welcome({navigation}) {
  const [geoLocation, setgeoLocation] = useState('');
  const skipHandler = () => {
    navigation.replace('Main');
  };

  const locateMeHandler = () => {
    // Geolocation.getCurrentPosition(
    //   position => {
    //     setgeoLocation(position);
    //   },
    //   error => {
    //     // See error code charts below.
    //     console.log(error.code, error.message);
    //   },
    //   {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    // );
    navigation.replace('LocateMe', {lat: 33.5223, long: 71.0617});
  };

  const provideLocationHandler = () => {
    navigation.replace('ProvideLocation');
  };

  return (
    <View style={styles.main}>
      <StatusBar barStyle="light-content" backgroundColor="#D70F64" />
      <View style={{flex: 5}}>
        <TouchableOpacity onPress={skipHandler} style={styles.skip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
          }}
          style={styles.img}
        />

        <View style={styles.welcome}>
          <Text style={styles.wText}>Welcome</Text>
          <Text style={styles.wText}>Rahman</Text>
        </View>

        <View style={styles.paragraph}>
          <Text style={styles.pText}>
            Explore the world of Hot food and surprise packages by setting up
            your delivery address.
          </Text>
        </View>
      </View>

      <View style={{padding: '10%', flex: 2}}>
        <View style={styles.SectionStyle}>
          <TouchableOpacity
            onPress={locateMeHandler}
            style={[
              styles.buttonStyle,
              {
                justifyContent: 'flex-start',
                paddingHorizontal: 50,
                flexDirection: 'row',
                backgroundColor: '#FFF',
              },
            ]}
            activeOpacity={0.5}>
            <ImageBackground
              source={require('../../assets/images/b-logos/locateme.png')}
              style={{width: 35, height: 35}}
            />
            <Text
              style={[
                styles.buttonTextStyle,
                {color: '#000', paddingHorizontal: 10},
              ]}>
              Locate me
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.SectionStyle}>
          <TouchableOpacity
            onPress={provideLocationHandler}
            style={[
              styles.buttonStyle,
              {
                justifyContent: 'flex-start',
                paddingHorizontal: 50,
                flexDirection: 'row',
                backgroundColor: '#FFF',
              },
            ]}
            activeOpacity={0.5}>
            <ImageBackground
              source={require('../../assets/images/b-logos/providelocation.png')}
              style={{width: 35, height: 35}}
            />
            <Text
              style={[
                styles.buttonTextStyle,
                {color: '#000', paddingHorizontal: 10},
              ]}>
              Provide Location
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#D70F64',
  },
  skip: {
    margin: '5%',
    alignItems: 'flex-end',
  },
  skipText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 18,
  },
  img: {
    width: 100,
    alignSelf: 'center',
    height: 100,
    borderRadius: 400,
  },
  welcome: {
    alignSelf: 'center',
    marginVertical: '5%',
  },
  wText: {
    color: '#fff',
    fontSize: 55,
    textAlign: 'center',
    fontWeight: '200',
  },
  paragraph: {
    alignSelf: 'center',
    paddingHorizontal: '10%',
  },
  pText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  SectionStyle: {
    marginVertical: 10,
  },
  buttonStyle: {
    backgroundColor: '#fff',
    color: '#000',
    borderColor: '#7DE24E',
    height: 60,
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonTextStyle: {
    color: '#000',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
