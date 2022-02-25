import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  ImageBackground,
  Image,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';

import {Formik} from 'formik';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome';
import locationStack from '../../navigation/LocationStack';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email is required')
    .label('Email'),
  password: Yup.string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .label('Password'),
});

const LoginScreen = ({navigation}) => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={{marginTop: 30}}>
        <KeyboardAvoidingView enabled>
          <View
            style={{
              alignSelf: 'center',
              marginBottom: 30,
            }}>
            <Image
              style={styles.stretch}
              source={require('../../assets/logo.png')}
            />
          </View>
          <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={validationSchema}
            onSubmit={values => navigation.replace('Location')}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View>
                <View style={{marginBottom: 20}}>
                  <Text style={styles.label}>Email</Text>
                  <TextInput
                    style={[
                      styles.textInput,
                      touched.email && errors.email
                        ? styles.borderRed
                        : styles.borderGreen,
                    ]}
                    placeholder="Email"
                    placeholderTextColor="#AAACAE"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    value={values.email}
                  />
                  {errors.email && touched.email && (
                    <Text style={styles.error}>{errors.email}</Text>
                  )}
                </View>

                <View style={{marginBottom: 10}}>
                  <Text style={styles.label}>Password</Text>
                  <TextInput
                    style={[
                      styles.textInput,
                      touched.password && errors.password
                        ? styles.borderRed
                        : styles.borderGreen,
                    ]}
                    placeholder="Password"
                    placeholderTextColor="#AAACAE"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    autoCapitalize="none"
                    secureTextEntry
                    textContentType="password"
                    value={values.password}
                  />

                  {errors.password && touched.password && (
                    <Text style={styles.error}>{errors.password}</Text>
                  )}
                </View>
                <View>
                  <Text
                    onPress={() => {
                      navigation.replace('ForgotPasswordScreen');
                    }}
                    style={styles.forgotPassword}>
                    Forgot Password
                  </Text>
                </View>
                <View>
                  <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.7}
                    onPress={handleSubmit}>
                    <Text style={styles.buttonTextStyle}>LOGIN</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
          <View>
            <TouchableOpacity
              style={[
                styles.buttonStyle,
                {
                  flexDirection: 'row',
                  backgroundColor: '#1877F2',
                },
              ]}
              activeOpacity={0.5}
              onPress={() => console.log('this is facebook login')}>
              <Icon name="facebook" size={25} color="#fff" />
              <Text style={[styles.buttonTextStyle, {paddingHorizontal: 20}]}>
                Login with Facebook
              </Text>
            </TouchableOpacity>
            <View>
              <TouchableOpacity
                style={[
                  styles.buttonStyle,
                  {
                    flexDirection: 'row',
                    backgroundColor: '#D9DCDF',
                  },
                ]}
                activeOpacity={0.5}
                onPress={() => console.log('This is google login')}>
                <ImageBackground
                  source={require('../../assets/images/b-logos/Google.png')}
                  style={{width: 35, height: 35}}
                />
                <Text
                  style={[
                    styles.buttonTextStyle,
                    {color: '#000', paddingHorizontal: 20},
                  ]}>
                  Login with Google
                </Text>
              </TouchableOpacity>
            </View>
            <View style={[{alignItems: 'flex-end'}]}>
              <Text
                onPress={() => navigation.replace('RegisterScreen')}
                style={styles.forgotPassword}>
                <Text style={{color: '#000'}}>New Here?</Text> Register
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  borderRed: {
    borderColor: 'red',
  },
  borderGreen: {
    borderColor: '#ddd',
  },
  stretch: {
    width: 160,
    height: 160,
    resizeMode: 'stretch',
  },

  label: {
    color: '#7E8389',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    marginLeft: 15,
    marginBottom: 5,
  },

  textInput: {
    borderRadius: 10,
    borderColor: '#DFE2E6',
    color: '#000',
    borderWidth: 2,
    marginHorizontal: 13,
    fontSize: 14,
    paddingLeft: 23,
  },
  error: {
    color: 'red',
    marginLeft: 20,
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
  },

  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 5,
    fontSize: 17,
    fontWeight: 'bold',
  },

  forgotPassword: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#D70F64',
    textAlign: 'right',
    marginRight: 20,
  },
});
