import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Appbar, Button} from 'react-native-paper';

const MainPage = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
      <Appbar.Header style={{backgroundColor: '#fff', elevation: 0}}>
        <Appbar.BackAction
          onPress={() => {
            navigation.replace('LoginScreen2');
          }}
        />
        <Appbar.Content title="Donation" />
      </Appbar.Header>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 120,
        }}>
        <Image
          source={require('../../assets/emptyCart.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.No_donation}>No Donation Yet</Text>
      <Text style={styles.motivationText}>
        There are good people who give food without cost. Become one of them by
        Donating Food.
      </Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.7}
        onPress={() => navigation.replace('DonationPost')}>
        <Text style={styles.buttonTextStyle}>Donate Food</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  image: {width: 220, height: 220, resizeMode: 'stretch'},
  No_donation: {
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 40,
    fontSize: 30,
  },

  motivationText: {
    flex: 1,
    fontSize: 18,
    lineHeight: 27,
    textAlign: 'center',
    paddingHorizontal: 10,
  },

  buttonStyle: {
    backgroundColor: '#D70F64',
    color: '#FFFFFF',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
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
