import {
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');

const DonorLocation = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View>
        <Image
          style={styles.img}
          source={require('../../assets/images/ReservePackage/map.png')}
        />
      </View>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.7}
        onPress={() => {
          /* 1. Navigate to the ReservePackageDetail route with params */
          navigation.navigate('ReservePackageDetail', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}>
        <Text style={styles.buttonTextStyle}>Go to detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DonorLocation;

const styles = StyleSheet.create({
  img: {
    width: width,
    height: height,
    alignSelf: 'center',
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
