import React from 'react';
import {StyleSheet, StatusBar, View, Image, Text, TouchableOpacity} from  'react-native';
import { Appbar, TextInput } from 'react-native-paper';

const Login =  ({navigation}) => {

  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState(null);
  return (
      <View  style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
         

          <View style={styles.container1}>

              <View style={styles.inputView}>
                <TextInput  mode="outlined"  label="Phone Number"  value={text} style={styles.inputText}  onChangeText={text => onChangeText(text)}/>
              </View>
              <View style={styles.inputView}>
              <TextInput  mode="outlined" label="Password" secureTextEntry right={<TextInput.Icon name="eye" />} value={text} style={styles.inputText}  onChangeText={text => onChangeText(text)}/>
              </View>

              <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
              </TouchableOpacity>

              <View style={styles.actions}>
                <Text style={styles.or}>Or</Text>
              </View>

              <View style={styles.actions}>
              <TouchableOpacity style={{marginHorizontal: 15}}>
                <Text style={styles.forgot}>Forgot Password?</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.singUp}>Signup</Text>
              </TouchableOpacity>
              </View>


          </View>

    </View>
    );
 };
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  or:{
    fontSize : 15,
    fontWeight :'bold'
  },
  container1: {
    flex: 6,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView:{
    width: '90%',
    backgroundColor:'#EAEAEA',
    height:55,
    marginBottom:20,
    justifyContent:'center',
    activeOutlineColor:"#F54748",
     outlineColor:"#fff"
    
  },
  inputText:{
    height:55,
    width : '100%',
    color:'#777777',
    fontWeight: '800',
  },
  singUp:{
    color: '#39B54A',
    fontWeight: '500',
  },
  loginBtn:{
    width:'90%',
    backgroundColor:'#F54748',
    borderRadius:30,
    height:56,
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    marginBottom:10
  },
  loginText: {
    color: '#ffffff',
    fontWeight: '800',
  },  
  actions:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  logoView:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
    marginTop: 0,
  },
  logo:{
    marginBottom: 25,
    width: 250,
    height: 100,
  }
})
export default Login;