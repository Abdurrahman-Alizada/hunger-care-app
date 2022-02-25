import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import {Appbar, Button} from 'react-native-paper';

const ForgotPasswordScreen = ({navigation}) => {
  return (
    <View style={styles.mainBody}>
      <Appbar.Header style={{backgroundColor: '#fff'}}>
        <Appbar.BackAction
          onPress={() => {
            navigation.replace('LoginScreen2');
          }}
        />
        <Appbar.Content title="Forgot Password" />
      </Appbar.Header>
      <View style={styles.a}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter Email"
          placeholderTextColor="#8b9cb5"
          autoCapitalize="none"
          keyboardType="email-address"
          returnKeyType="send"
          blurOnSubmit={false}
        />
        <Text style={styles.info}>
          * We will send you a message to set or reset your new password
        </Text>
        <Button
          contentStyle={styles.btnContent}
          style={styles.btn}
          icon="send"
          mode="contained"
          onPress={() => {
            navigation.replace('OTPScreen');
          }}>
          Send Code
        </Button>
      </View>
    </View>
  );
};
export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  label: {
    marginBottom: 5,
  },
  inputStyle: {
    width: '100%',
    color: '#000',
    borderWidth: 2,
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
    borderColor: '#DFE2E5',
  },
  info: {
    paddingHorizontal: '2%',
    color: '#000',
  },
  btnContent: {
    backgroundColor: '#BF0A30',
    flexDirection: 'row-reverse',
  },
  btn: {
    alignSelf: 'flex-end',
    marginVertical: '5%',
  },
  a: {
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: '5%',
  },
});
