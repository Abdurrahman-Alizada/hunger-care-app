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

const SuccessPage = ({navigation}) => {
  return (
    <View style={styles.successMain}>
      <View style={styles.success}>
        <Image
          style={{}}
          source={require('../../assets/images/ReservePackage/tick.png')}
        />
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.successHeading}>
          You got your package
        </Text>
        <Text
          style={styles.successLine}>
          we'll deliver your order immediately,make sure your order put on the
          doorstep.{' '}
        </Text>
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
          <Text style={styles.buttonTextStyle}>Leave a Review</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SuccessPage;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#D70F64',
    color: '#FFFFFF',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 60,
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
  successMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#Fff',
  },
  success: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successHeading:{
    fontSize: 24, 
    fontWeight: 'bold', 
    alignSelf: 'center'
  },
 successLine:{
  fontSize: 16,
  fontWeight: '400',
  textAlign: 'center',
  width: width - 100,
},
});
