import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Text, Dimensions} from 'react-native';

const ScreenWidth = Dimensions.get('window').width;

const DATA = [
  {
    id: '1',
    title: '1',
  },
  {
    id: '2',
    title: '2',
  },
  {
    id: '3',
    title: '3',
  },
];

export default class Example extends Component {
  renderItems = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={this.renderItems}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    width: (ScreenWidth - 40) / 2 - 10,
    backgroundColor: '#000',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    alignSelf: 'center',
  },
});
