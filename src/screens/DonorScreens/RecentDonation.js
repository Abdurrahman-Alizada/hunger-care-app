import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {Appbar, Button} from 'react-native-paper';
import Package from '../../components/Package';

const RecentDonation = ({navigation}) => {
  let packagesInfo = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      packageName: 'Lunch Sadqa',
      packageItems: 'Simple biryani, Sabzi, Daal',
      packagesDonated: '80 Packages Donated',
    },
    {
      id: 'bd7acbea-c-46c2-aed5-3ad53abb28ba',
      packageName: 'Dinner Package',
      packageItems: 'Chicken, sharbat, lobya',
      packagesDonated: '24 Packages Donated',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2',
      packageName: 'Ramazan Aftar',
      packageItems: '2 rotti,chawal, sharbat and kajor',
      packagesDonated: '50 Packages Donated',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abba',
      packageName: 'Ramazan Aftar',
      packageItems: '2 rotti,chawal, sharbat and kajor',
      packagesDonated: '38 Packages Donated',
    },
    {
      id: 'bdbea-c1b1-46c2-aed5-3ad53abb28ba',
      packageName: 'Ramazan Aftar',
      packageItems: '2 rotti,chawal, sharbat and kajor',
      packagesDonated: '100 Packages Donated',
    },
  ];
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Appbar.Header style={{backgroundColor: '#fff', elevation: 0}}>
        <Appbar.BackAction
          onPress={() => {
            navigation.replace('LoginScreen2');
          }}
        />
        <Appbar.Content title="Donation" />
      </Appbar.Header>
      <Text style={styles.title}>Your Recent Donation</Text>
      <FlatList
        data={packagesInfo}
        renderItem={Package}
        keyExtractor={item => item.id}
      />

      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.7}
        onPress={() => navigation.replace('DonationPost')}>
        <Text style={styles.buttonTextStyle}>Donate Food</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RecentDonation;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'roboto',
    fontSize: 18,
    fontWeight: '900',
    lineHeight: 18,
    textAlign: 'left',
    color: '#424242',
    marginLeft: 33,
    marginTop: 30,
    marginBottom: 30,
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
