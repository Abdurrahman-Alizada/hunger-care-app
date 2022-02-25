// Import React and Component
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    navigation.replace('Location');
  };

  return (
    <View style={styles.mainBody}>
      <View
        style={{padding: '5%', justifyContent: 'center', alignItems: 'center'}}>
        <View>
          <View style={styles.SectionStyle}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserEmail => setUserEmail(UserEmail)}
              placeholder="Enter Phone Number" //dummy@abc.com
              placeholderTextColor="#8b9cb5"
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserEmail => setUserEmail(UserEmail)}
              placeholder="Enter Password" //dummy@abc.com
              placeholderTextColor="#8b9cb5"
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.SectionStyle}>
            <Text
              onPress={() => {
                navigation.replace('ForgotPasswordScreen');
              }}
              style={styles.forgotPassword}>
              Forgot Password
            </Text>
          </View>

          <View style={styles.SectionStyle}>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.SectionStyle}>
            <TouchableOpacity
              style={[
                styles.buttonStyle,
                {
                  justifyContent: 'flex-start',
                  paddingHorizontal: 50,
                  flexDirection: 'row',
                  backgroundColor: '#1877F2',
                },
              ]}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <ImageBackground
                source={require('../../assets/images/b-logos/Facebook.png')}
                style={{width: 35, height: 35}}
              />
              <Text style={[styles.buttonTextStyle, {paddingHorizontal: 10}]}>
                Login with Facebook
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.SectionStyle}>
            <TouchableOpacity
              style={[
                styles.buttonStyle,
                {
                  justifyContent: 'flex-start',
                  paddingHorizontal: 50,
                  flexDirection: 'row',
                  backgroundColor: '#D9DCDF',
                },
              ]}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <ImageBackground
                source={require('../../assets/images/b-logos/Google.png')}
                style={{width: 35, height: 35}}
              />
              <Text
                style={[
                  styles.buttonTextStyle,
                  {color: '#000', paddingHorizontal: 10},
                ]}>
                Login with Google
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.SectionStyle, {alignItems: 'flex-end'}]}>
            <Text
              onPress={() => navigation.navigate('RegisterScreen')}
              style={styles.forgotPassword}>
              <Text style={{color: '#000', marginHorizontal: 5}}>
                New Here?
              </Text>{' '}
              Sign up
            </Text>
          </View>
          {errortext != '' ? (
            <Text style={styles.errorTextStyle}> {errortext} </Text>
          ) : null}
          {/* </KeyboardAvoidingView> */}
        </View>
      </View>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: '#fff',
  },
  SectionStyle: {
    marginVertical: 10,
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
  forgotPassword: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FA4A0C',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  buttonStyle: {
    backgroundColor: '#F54748',
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 17,
    fontWeight: 'bold',
  },

  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});
