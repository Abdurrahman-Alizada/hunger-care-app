import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const provideLocation = () => {
  return (
    <View>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyBn7D2qajZzmg3y-dKYRR2PSgxj5UBDFrg',
          language: 'en',
        }}
      />
    </View>
  );
};

export default provideLocation;

const styles = StyleSheet.create({});
