import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Pressable,
} from 'react-native';
import React from 'react';
import {Appbar} from 'react-native-paper';
const {width} = Dimensions.get('window');
import {CountDown} from 'react-native-customizable-countdown';
import Icon from 'react-native-vector-icons/FontAwesome5';

const OrderStatus = ({route, navigation}) => {
  const {itemId, otherParam} = route.params;

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
        <View style={styles.StatusMain}>
          {/* address */}
          <View style={{marginVertical: '5%'}}>
            <View style={styles.address}>
              <Text style={{marginRight: '5%'}}>
                <Icon name="home" size={25} color="#2E3A59" />
              </Text>
              <View>
                <Text style={styles.addressHeading}>Address</Text>
                <Text style={styles.addressDetail}>
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
                style={styles.map}
                source={require('../../assets/images/ReservePackage/map.png')}
              />
            </Pressable>
          </View>
          {/* end address */}

          {/* timers */}
          <View style={styles.timerMain}>
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
          {/* donor deatil */}
          <View>
            <View style={styles.donor}>
              <Text style={styles.donorTitle}>Donor Detail</Text>
            </View>
            <View style={styles.variationCard}>
              <Image
                style={styles.donorPic}
                source={require('../../assets/images/ReservePackage/donorPic.png')}
              />
              <View style={styles.donorDetail}>
                <View>
                  <Text style={styles.donorName}>Name</Text>
                  <Text>Some Caption</Text>
                </View>

                <Pressable
                  style={{alignSelf: 'center'}}
                  onPress={() => navigation.navigate('SuccessPage')}>
                  <Text style={styles.contactDonor}>Contact donor</Text>
                </Pressable>
              </View>
            </View>
          </View>

          {/* package detail */}
          <View>
            <View style={styles.packageDetail}>
              <Text style={styles.packageDetailTitle}>Package Detail</Text>
            </View>
            <View style={styles.variationCard}>
              <Image
                style={styles.packagePic}
                source={require('../../assets/images/ReservePackage/Foodimage.png')}
              />
              <View>
                <Text style={styles.packageName}>Biryani</Text>
                <Text>1x - Chicken Biryani</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderStatus;

const styles = StyleSheet.create({
  remainingTime: {
    textAlign: 'left',
    marginVertical: '2%',
    fontWeight: '800',
    fontSize: 18,
  },
  packageName: {
    fontSize: 15,
    fontWeight: '500',
  },
  packageDetailTitle: {
    fontWeight: '600',
    fontSize: 18,
  },
  packageDetail: {
    marginVertical: 10,
  },
  packagePic: {
    width: 80,
    height: 80,
    marginRight: '10%',
  },
  donorName: {
    fontSize: 15,
    fontWeight: '500',
  },
  donorTitle: {
    fontWeight: '600',
    fontSize: 18,
  },
  donorDetail: {
    width: '70%',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  donorPic: {
    width: 80,
    height: 80,
    marginRight: '10%',
    borderRadius: 10,
  },
  contactDonor: {
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  variationCard: {
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    elevation: 4,
    flexDirection: 'row',
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginBottom: 15,
  },
  donor: {
    marginVertical: 10,
  },
  timerMain: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: width - 20,
    height: 164,
    alignSelf: 'center',
  },
  addressHeading: {
    fontSize: 17,
    fontWeight: '600',
  },
  addressDetail: {
    color: '#B2B2B2',
    fontFamily: 'Poppins',
  },
  address: {
    marginBottom: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  StatusMain: {
    justifyContent: 'center',
    paddingHorizontal: '2%',
    backgroundColor: '#fff',
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
