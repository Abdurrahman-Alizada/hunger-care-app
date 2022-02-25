import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import {Appbar, Button} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Formik} from 'formik';
import * as Yup from 'yup';

import React from 'react';

const validationSchema = Yup.object().shape({
  postTitle: Yup.string().required('Title is required').label('postTitle'),

  itemName: Yup.string().required('This field is required').label('itemName'),

  totalPackages: Yup.string()
    .required('Should not be empty')
    .label('totalPackages'),
  description: Yup.string().notRequired().label('description'),
});

const DonationPost = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />

        <View>
          <Appbar.Header style={{backgroundColor: '#fff', elevation: 0}}>
            <Appbar.BackAction
              onPress={() => {
                navigation.replace('RecentDonation');
              }}
            />
            <Appbar.Content title="Donation Post" />
          </Appbar.Header>
          <View style={{marginTop: 40}}>
            <Formik
              initialValues={{
                postTitle: '',
                description: '',
                itemName: '',
                totalPackages: '',
              }}
              validationSchema={validationSchema}
              onSubmit={values => navigation.replace('DonationPost2')}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <>
                  <View style={styles.SectionStyle}>
                    <Text style={styles.label}>Post title</Text>
                    <TextInput
                      style={[
                        styles.inputStyle,
                        touched.postTitle && errors.postTitle
                          ? styles.borderRed
                          : styles.borderGreen,
                      ]}
                      autoCapitalize="none"
                      placeholder="For Example Ramazan Aftar package"
                      onChangeText={handleChange('postTitle')}
                      onBlur={handleBlur('postTitle')}
                      multiline={true}
                      numberOfLines={2}
                      returnKeyType="next"
                      value={values.postTitle}
                    />
                    {errors.postTitle && touched.postTitle && (
                      <Text style={styles.error}>{errors.postTitle}</Text>
                    )}
                  </View>
                  <View style={styles.SectionStyle}>
                    <Text style={styles.label}>Description</Text>
                    <TextInput
                      style={[styles.inputStyle, {padding: 0}]}
                      placeholder="Write about package "
                      onChangeText={handleChange('description')}
                      onBlur={handleBlur('description')}
                      multiline={true}
                      numberOfLines={4}
                      returnKeyType="next"
                      value={values.description}
                    />
                  </View>
                  <View style={styles.SectionStyle}>
                    <Text style={styles.label}>Items Name </Text>
                    <TextInput
                      style={[
                        styles.inputStyle,
                        touched.itemName && errors.itemName
                          ? styles.borderRed
                          : styles.borderGreen,
                      ]}
                      placeholder="Biryani, chicken, salan "
                      onChangeText={handleChange('itemName')}
                      onBlur={handleBlur('itemName')}
                      multiline={true}
                      numberOfLines={2}
                      returnKeyType="next"
                      value={values.itemName}
                    />
                    {errors.itemName && touched.itemName && (
                      <Text style={styles.error}>{errors.itemName}</Text>
                    )}
                  </View>
                  <View style={styles.SectionStyle}>
                    <Text style={styles.label}>Total packages </Text>
                    <TextInput
                      style={[
                        styles.inputStyle,
                        touched.totalPackages && errors.totalPackages
                          ? styles.borderRed
                          : styles.borderGreen,
                      ]}
                      placeholder="Quantity of packages"
                      onChangeText={handleChange('totalPackages')}
                      onBlur={handleBlur('totalPackages')}
                      multiline={true}
                      numberOfLines={2}
                      keyboardType="number-pad"
                      returnKeyType="next"
                      value={values.totalPackages}
                    />
                    {errors.totalPackages && touched.totalPackages && (
                      <Text style={styles.error}>{errors.totalPackages}</Text>
                    )}
                  </View>

                  <TouchableOpacity
                    style={[styles.buttonStyle, {flexDirection: 'row'}]}
                    activeOpacity={0.7}
                    onPress={handleSubmit}>
                    <Text style={styles.buttonTextStyle}>Next </Text>
                    <AntDesign
                      name="arrowright"
                      size={20}
                      color="#fff"
                      style={{marginLeft: 10}}
                    />
                  </TouchableOpacity>
                </>
              )}
            </Formik>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DonationPost;

const styles = StyleSheet.create({
  SectionStyle: {
    marginVertical: 15,
    paddingHorizontal: 20,
  },
  label: {
    marginBottom: 5,
    fontWeight: '400',
  },
  inputStyle: {
    width: '100%',
    color: '#000',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: '#DFE2E5',
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
    marginTop: 80,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 5,
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: 'bold',
  },
  borderRed: {
    borderColor: 'red',
  },
  borderGreen: {
    borderColor: '#ddd',
  },
  error: {
    color: 'red',
    marginLeft: 20,
  },
});
