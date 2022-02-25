import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
  Alert,
  Modal,
  Pressable,
  Platform,
} from 'react-native';
import {Appbar, Button} from 'react-native-paper';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import {Formik} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  postTitle: Yup.string().required('Title is required').label('postTitle'),

  itemName: Yup.string().required('This field is required').label('itemName'),

  totalPackages: Yup.string()
    .required('Should not be empty')
    .label('totalPackages'),
  description: Yup.string().notRequired().label('description'),
});

const DonationPost = ({navigation}) => {
  const [fileData, setfileData] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('time');
  const [show, setShow] = useState(false);
  const [showForEnd, setShowForEnd] = useState(false);
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const onChange = (event, selectedDate) => {
    let time = moment(selectedDate).format('h:mm:ss a');
    setStart(time);

    setShow(false);
  };

  const onChangeForEnd = (event, selectedDate) => {
    console.log('End mai hon');
    const currentDate = selectedDate;
    let time = moment(selectedDate).format('h:mm:ss a');
    setEnd(time);
    setShowForEnd(false);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = prop => {
    showMode('time');
  };

  const showModeForEnd = currentMode => {
    setShowForEnd(true);
    setMode(currentMode);
  };

  const showTimepickerForEnd = prop => {
    showModeForEnd('time');
  };

  let openCamera = () => {
    setModalVisible(!modalVisible);
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchCamera(options, response => {
      // console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        console.log(response.assets[0].uri);
        setfileData(response.assets[0].uri);
      }
    });
  };

  let openGallery = () => {
    setModalVisible(!modalVisible);

    let options = {
      width: 300,
      height: 400,
      cropping: true,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        console.log(response.assets[0].uri);
        setfileData(response.assets[0].uri);
      }
    });
  };

  function renderFileData() {
    if (fileData) {
      return <Image source={{uri: fileData}} style={styles.images} />;
    } else {
      return <View style={styles.images}></View>;
    }
  }

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <Appbar.Header style={{backgroundColor: '#fff', elevation: 0}}>
        <Appbar.BackAction
          onPress={() => {
            navigation.replace('DonationPost');
          }}
        />
        <Appbar.Content title="Donation Post" />
      </Appbar.Header>
      <View style={{paddingHorizontal :'5%', }}>
        <Text style={styles.timing}>Package Availabe Timing</Text>
        <View style={{}}>
      
          <View style={{}}>
            <Text
              style={[styles.package_name, {marginTop: 20}]}>
              From
            </Text>
            <Pressable style={styles.package_card} onPress={showTimepicker}>
              <Text style={styles.package_name}>{start ? start : 'Time'}</Text>
              <AntDesign
                name="caretdown"
                size={20}
                color="#000"
                style={{marginLeft: 10}}
              />
            </Pressable>
          </View>
      
          <View style={{}}>
            <Text
              style={[styles.package_name, {marginTop: 20}]}>
              To
            </Text>
            <Pressable
              style={styles.package_card}
              onPress={showTimepickerForEnd}>
              <Text style={styles.package_name}>{end ? end : 'Time'}</Text>
              <AntDesign
                name="caretdown"
                size={20}
                color="#000"
                style={{marginLeft: 10}}
              />
            </Pressable>
          </View>
      
        </View>
          {/* upload picture start */}
        
        <View style={{marginTop:5}}>
        <Text style={styles.timing}>Image</Text>
        <Pressable
          style={[styles.buttonStyle]}
          onPress={() => setModalVisible(true)}>
          <Text style={[styles.textStyle]}>Upload picture</Text>
        </Pressable>
        </View>
          {/* end upload picture */}
        {renderFileData()}


        <Pressable
          style={[styles.buttonStyle]}
          onPress={() => console.log('Donated')}>
          <Text style={[styles.textStyle, {fontSize: 20}]}>Donate</Text>
        </Pressable>


        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={[styles.modalView, {width: 350, height: 340}]}>
              <TouchableOpacity
                onPress={openCamera}
                style={[styles.buttonStyle, {marginHorizontal: 50}]}>
                <Text style={styles.buttonTextStyle}>Choose File</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={openGallery}
                style={[styles.buttonStyle, {marginHorizontal: 50}]}>
                <Text style={styles.buttonTextStyle}>Open Gallery</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={false}
              display="spinner"
              onChange={onChange}
            />
          )}
          {showForEnd && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={false}
              display="spinner"
              onChange={onChangeForEnd}
            />
          )}
        </View>
     
      </View>
    </View>
  );
};

export default DonationPost;

const styles = StyleSheet.create({
  timing: {
    // marginLeft: 40,
    fontSize: 18,
    color: '#000',
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
    alignSelf:'center',
    width: 240,
    borderRadius: 10,
    marginVertical: '5%',
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
  images: {
    alignSelf:'center',
    width: 150,
    height: 150,
    marginHorizontal: 30,
  },
  error: {
    color: 'red',
    marginLeft: 20,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 20,
    width: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  package_card: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderRadius: 6,
    width: '100%',
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
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
});
