import {
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');

const OrderPlaceSuccessful = ({navigation}) => {
  return (
    <View style={styles.orderSuccessMain}>
      <View style={{flex: 1}}>
        <Image
          style={styles.SuccessImg}
          source={require('../../assets/images/ReservePackage/s.jpg')}
        />
      </View>
      <View style={styles.packageReserved}>
        <Text style={styles.packageReservedHeading}>
          Your package is reserved!
        </Text>
        <Text style={styles.packageReservedDescription}>
          Please reach the destination in given time and collect your pacakge.{' '}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.7}
        onPress={() => {
          /* 1. Navigate to the ReservePackageDetail route with params */
          navigation.navigate('OrderStatus', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}>
        <Text style={styles.buttonTextStyle}>Check package status</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderPlaceSuccessful;

const styles = StyleSheet.create({
  orderSuccessMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F5F2',
  },
  SuccessImg: {
    width: width,
    height: '100%',
  },
  packageReserved: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  packageReservedHeading: {
    fontSize: 24,
    fontWeight: '500',
    width: width - 80,
  },
  packageReservedDescription: {
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
    width: width - 100,
  },
  buttonStyle: {
    backgroundColor: '#D70F64',
    color: '#FFFFFF',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 60,
    marginHorizontal: 20,
    borderRadius: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 5,
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: 'bold',
  },
});
