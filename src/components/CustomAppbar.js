import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
} from 'react-native';
import {Appbar} from 'react-native-paper';

export default function CustomAppbar({openDrawer}) {
  return (
    <Appbar style={styles.appbar}>
      <TouchableOpacity style={{marginLeft: '3%'}} onPress={openDrawer}>
        <ImageBackground
          source={require('../assets/images/user-profile.jpg')}
          style={{width: 35, height: 35}}
          imageStyle={{borderRadius: 25}}
        />
      </TouchableOpacity>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        {/* <TouchableOpacity style={{ marginLeft: '3%'}} onPress={openDrawer}>
            <ImageBackground source={require('../assets/images/user-profile.jpg')} style={{width: 35, height: 35,}} imageStyle={{borderRadius: 25}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: '3%'}} onPress={openDrawer}>
            <ImageBackground source={require('../assets/images/user-profile.jpg')} style={{width: 35, height: 35,}} imageStyle={{borderRadius: 25}}/>
            </TouchableOpacity>
             */}
      </View>
    </Appbar>
  );
}

const styles = StyleSheet.create({
  appbar: {
    justifyContent: 'space-between',
    position: 'absolute',
    backgroundColor: '#fff',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
