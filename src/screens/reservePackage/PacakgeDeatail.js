import {
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {Appbar, Switch} from 'react-native-paper';
const {width} = Dimensions.get('window');
import {CountDown} from 'react-native-customizable-countdown';
import Icon from 'react-native-vector-icons/FontAwesome5';

const PacakgeDeatail = ({route, navigation}) => {
  const {itemId, otherParam} = route.params;
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [text, setText] = React.useState('');

  let variationsInfo = [
    {
      Name: 'Biryani',
      Description: 'Chicken and sada',
    },
    {
      Name: 'Biryani',
      Description: 'Chicken and sada',
    },
    {
      Name: 'Biryani',
      Description: 'Chicken and sada',
    },
    {
      Name: 'Biryani',
      Description: 'Chicken and sada',
    },
  ];

  const VariationComponent = ({item: {Name, Description}}) => (
    <View style={styles.variationCard}>
      <Image
        style={{width: 80, height: 80, marginRight: '10%'}}
        source={require('../../assets/images/ReservePackage/Foodimage.png')}
      />
      <View>
        <Text style={{fontSize: 15, fontWeight: '500'}}>{Name}</Text>
        <Text>{Description}</Text>
      </View>
    </View>
  );

  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Appbar.Header style={{backgroundColor: '#fff'}}>
        <Appbar.BackAction
          onPress={() => {
            navigation.replace('ReserveMain');
          }}
        />
      </Appbar.Header>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom: '10%'}}>
        <View style={styles.pacakgeDeatailMain}>
          {/* donor detial */}
          {/* <View style={{marginVertical:5, alignSelf:'center'}}>
            <Text style={{ fontWeight:'bold', fontSize:20}}>Baaz Muhammad</Text>
            <Text>Charsadda chowk, Mardan</Text>
        </View> */}
          {/* end donor detail */}
          {/* timers */}
          <View style={styles.timer}>
            <Text style={styles.remainingTime}>Remaining Time</Text>

            <CountDown
              // ref = {(ref) => this.myRef=ref}
              initialSeconds={450}
              onTimeOut={() => {}}
              digitFontSize={40}
              labelFontSize={20}
              width={300}
              height={100}
              hoursLabel={'Hours'}
              minutesLabel={'Minutes'}
              enableLabel={true}
              backgroundColor={'#D70F64'}
              hoursBackgroundStyle={{
                borderWidth: 0,
                borderColor: 'blue',
              }}
              minutesBackgroundStyle={{
                borderWidth: 0,
                borderColor: 'blue',
              }}
              secondsBackgroundStyle={{
                borderWidth: 0,
                borderColor: 'blue',
              }}
              secondsDigitFontStyle={{color: '#fff'}}
              secondsLabelFontStyle={{color: '#fff'}}
              minutesDigitFontStyle={{color: '#fff'}}
              minutesLabelFontStyle={{color: '#fff'}}
              hoursDigitFontStyle={{color: '#fff'}}
              hoursLabelFontStyle={{color: '#fff'}}
              labelFontWeight="bold"
              labelPosition="bottom"
            />
          </View>
          {/* end timers */}

          {/* Variation (packages) */}
          <View style={styles.variationMain}>
            <Text style={styles.variation}>Variations</Text>
            <View style={{marginVertical: 10}}>
              {variationsInfo.map((variation, index) => (
                <VariationComponent key={index} item={variation} />
              ))}
            </View>
          </View>
          {/*end Variation (packages) */}

          {/* comment */}
          <View style={styles.commentMain}>
            <View style={styles.comment}>
              <Text style={styles.commentTitle}>
                Tell something to your donor
              </Text>
              <Switch
                color="#D70F64"
                value={isSwitchOn}
                onValueChange={onToggleSwitch}
              />
            </View>
            <TextInput
              editable={isSwitchOn}
              selectTextOnFocus={isSwitchOn}
              style={styles.commentInput}
              placeholder="Optional"
              label="Optional"
              value={text}
              onChangeText={text => setText(text)}
            />
          </View>
          {/* end comment */}

          {/* address */}
          <View style={styles.addressMain}>
            <View style={styles.address}>
              <Text style={styles.addressIcon}>
                <Icon name="home" size={25} color="#2E3A59" />
              </Text>
              <View>
                <Text style={styles.addressHeading}>Address</Text>
                <Text style={styles.addressDeatail}>
                  Charsadda chwok, Mardan
                </Text>
              </View>
            </View>
            <Pressable
              style={{}}
              onPress={() =>
                navigation.navigate('ReservePackageDonorLocation')
              }>
              <Image
                style={{width: width - 20, height: 423, alignSelf: 'center'}}
                source={require('../../assets/images/ReservePackage/map.png')}
              />
            </Pressable>
          </View>
          {/* end address */}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.7}
        onPress={() => navigation.replace('ReservePackageOrderSuccess')}>
        <Text style={styles.buttonTextStyle}>Reserve Your Package</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PacakgeDeatail;

const styles = StyleSheet.create({
  addressMain: {marginBottom: '10%'},
  addressDeatail: {
    color: '#B2B2B2',
    fontFamily: 'Poppins',
  },
  address: {
    marginBottom: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressHeading: {
    fontSize: 17,
    fontWeight: '600',
  },
  addressIcon: {
    marginRight: '5%',
  },
  variationCard: {
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 30,
    alignItems: 'center',
    elevation: 4,
    flexDirection: 'row',
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginBottom: 15,
  },
  commentMain: {
    marginBottom: '5%',
  },
  comment: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  commentTitle: {
    fontWeight: '600',
    fontSize: 18,
  },
  pacakgeDeatailMain: {
    justifyContent: 'center',
    paddingHorizontal: '2%',
    backgroundColor: '#fff',
  },
  commentInput: {
    backgroundColor: '#F2F5F8',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  timer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  variation: {
    textAlign: 'left',
    fontWeight: '600',
    fontSize: 18,
  },
  variationMain: {
    marginVertical: 12,
    alignItems: 'flex-start',
  },
  remainingTime: {
    textAlign: 'left',
    marginVertical: '2%',
    fontWeight: '800',
    fontSize: 18,
  },
  buttonStyle: {
    backgroundColor: '#D70F64',
    color: '#FFFFFF',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 60,
    marginHorizontal: 20,
    borderRadius: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 5,
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: 'bold',
  },
});
