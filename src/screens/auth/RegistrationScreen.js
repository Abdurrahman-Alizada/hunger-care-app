import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').label('Name'),
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email is required')
    .label('Email'),
  password: Yup.string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .label('Password'),
  passwordConfirmation: Yup.string()
    .required('Confirm your password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .label('passwordConfirmation'),
});

const RegistrationScreen = ({navigation}) => {
  return (
    <View style={styles.mainBody}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <View style={{marginTop: 10}}>
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
                initialValues={{
                  name: '',
                  email: '',
                  password: '',
                  passwordConfirmation: '',
                }}
                validationSchema={validationSchema}
                onSubmit={values => console.log(values)}>
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
                      <Text style={styles.label}>Name</Text>
                      <TextInput
                        style={[
                          styles.textInput,
                          touched.name && errors.name
                            ? styles.borderRed
                            : styles.borderGreen,
                        ]}
                        placeholder="Name"
                        placeholderTextColor="#AAACAE"
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        autoCapitalize="none"
                        autoCorrect={false}
                        textContentType="name"
                        value={values.name}
                      />
                      {errors.name && touched.name && (
                        <Text style={styles.error}>{errors.name}</Text>
                      )}
                    </View>

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

                    <View style={{marginBottom: 10}}>
                      <Text style={styles.label}>Confirm Password</Text>
                      <TextInput
                        style={[
                          styles.textInput,
                          touched.passwordConfirmation &&
                          errors.passwordConfirmation
                            ? styles.borderRed
                            : styles.borderGreen,
                        ]}
                        placeholder="Confirm Password"
                        placeholderTextColor="#AAACAE"
                        onChangeText={handleChange('passwordConfirmation')}
                        onBlur={handleBlur('passwordConfirmation')}
                        autoCapitalize="none"
                        secureTextEntry
                        textContentType="password"
                        value={values.passwordConfirmation}
                      />

                      {errors.passwordConfirmation &&
                        touched.passwordConfirmation && (
                          <Text style={styles.error}>
                            {errors.passwordConfirmation}
                          </Text>
                        )}
                    </View>
                    <View>
                      <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.4}
                        onPress={handleSubmit}>
                        <Text style={styles.buttonTextStyle}>Register</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </Formik>
              <View>
                <View style={[{alignItems: 'flex-end'}]}>
                  <Text
                    onPress={() => navigation.replace('LoginScreen2')}
                    style={styles.forgotPassword}>
                    <Text style={{color: '#000'}}>Already Account?</Text> Login
                  </Text>
                </View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
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

  text: {
    color: '#7E8389',
    marginTop: 14,
    marginHorizontal: 50,
    fontSize: 20,
    fontWeight: '400',
    fontStyle: 'normal',
    letterSpacing: 1,
    marginBottom: 63,
  },

  label: {
    color: '#7E8389',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    marginLeft: 15,
    marginBottom: 5,
  },

  formControl: {
    marginBottom: 10,
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

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  signInBtn: {
    backgroundColor: '#D70F64',
    color: '#000',
    alignItems: 'center',
    padding: 10,
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
  buttonSocial: {
    backgroundColor: '#F54748',
    color: '#FFFFFF',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 20,
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
    color: '#BF0A30',
    textAlign: 'right',
    marginRight: 20,
  },
});
