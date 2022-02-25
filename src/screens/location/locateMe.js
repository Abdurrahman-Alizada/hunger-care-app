import React, {Component} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Platform, PermissionsAndroid} from 'react-native';

const createTwoButtonAlert = () =>
  Alert.alert('Alert Title', 'My Alert Msg', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);

class LocateMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    async function requestPermissions() {
      if (Platform.OS === 'ios') {
        Geolocation.requestAuthorization();
        Geolocation.setRNConfiguration({
          skipPermissionRequests: false,
          authorizationLevel: 'whenInUse',
        });
      }

      if (Platform.OS === 'android') {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
      }
    }
    if (requestPermissions()) {
      Geolocation.getCurrentPosition(
        position => {
          console.log('position');
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
        error => console.log(error.code),
        {enableHighAccuracy: false, timeout: 200000, maximumAge: 1000},
      );
    }
  }

  render() {
    return (
      <>
        {this.state.latitude && this.state.longitude ? (
          <>
            <View style={styles.container}>
              <StatusBar barStyle="dark-content" backgroundColor="#fff" />
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: this.state.latitude,
                  longitude: this.state.longitude,
                  latitudeDelta: 1,
                  longitudeDelta: 1,
                }}>
                {!!this.state.latitude && !!this.state.longitude && (
                  <MapView.Marker
                    coordinate={{
                      latitude: this.state.latitude,
                      longitude: this.state.longitude,
                    }}
                  />
                )}
              </MapView>
            </View>
            <View style={styles.locationAddress}>
              <View
                style={{
                  padding: 40,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Icon
                  style={{marginRight: 30}}
                  name="home"
                  size={40}
                  color="#000"
                />
                <View>
                  <Text style={[styles.text]}>UET MARDAN</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.4}
                onPress={() => console.log('press confirm')}>
                <Text style={styles.buttonTextStyle}>Confirm Location</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <Text>Loading .... </Text>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 10,
    height: 500,
  },
  locationAddress: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#000',
    paddingHorizontal: 20,
    paddingTop: 20,
    marginTop: 210,
    flexDirection: 'row',
    flexDirection: 'column',
  },

  buttonStyle: {
    backgroundColor: '#D70F64',
    color: '#FFFFFF',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 5,
    fontSize: 17,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
    backgroundColor: '#fff',
    color: '#000',
    width: 250,
  },
});
export default LocateMe;
