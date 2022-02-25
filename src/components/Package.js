import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Package = ({item: {packageName, packageItems, packagesDonated}}) => {
  console.log('Zakir Bangash', packageName);
  return (
    <View style={styles.package_card}>
      <Text style={styles.package_name}>{packageName}</Text>
      <Text style={styles.package_items}>{packageItems}</Text>
      <View style={styles.packages_donated}>
        <Text style={styles.packages_donated_text}>{packagesDonated}</Text>
      </View>
    </View>
  );
};

export default Package;

const styles = StyleSheet.create({
  package_card: {
    marginHorizontal: 30,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginBottom: 15,
  },

  package_name: {
    fontFamily: 'roboto',
    fontSize: 18,
    fontWeight: '900',
    lineHeight: 18,
    textAlign: 'left',
    color: '#424242',
    marginBottom: 5,
  },

  package_items: {
    fontFamily: 'roboto',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 18,
    color: '#707070',
    marginBottom: 10,
  },

  packages_donated: {
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#4FA987',
    padding: 8,
  },
  packages_donated_text: {
    textAlign: 'center',
    color: '#4FA987',
    fontWeight: '700',
  },
});
