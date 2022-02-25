import React, {useState} from 'react';
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/FontAwesome5';
const {width} = Dimensions.get('window');
import {useTranslation} from 'react-i18next';

const welcome = ({navigation}) => {
  const dummyData = [
    {
      title: 'Rescued Food',
      subTitle: 'Saving food and hunger.',
      description: 'Left over food and supplies are gathered.',
    },
    {
      title: 'Rescued Food',
      subTitle: 'Saving food and hunger.',
      description: 'Left over food and supplies are gathered.',
    },
    {
      title: 'Rescued Food',
      subTitle: 'Saving food and hunger.',
      description: 'Left over food and supplies are gathered.',
    },
  ];

  const {t, i18n} = useTranslation();

  const [currentLanguage, setLanguage] = useState('en');

  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
  };

  return (
    <View style={styles.main}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={{paddingHorizontal: '2%'}}>
        <Feather
          onPress={() =>
            currentLanguage === 'en'
              ? changeLanguage('ur')
              : changeLanguage('en')
          }
          name="language"
          size={30}
          color="#000"
          style={{marginRight: 0}}
        />
      </View>
      {/* welcome note */}
      <View style={styles.welcome}>
        <View style={styles.welcomeText}>
          <Text style={styles.goodEvening}>{t('greetings')} </Text>
          <Text style={styles.line}>{t('askfor')}</Text>
        </View>
        <Image
          style={styles.welcomeImg}
          source={require('../../assets/images/ReservePackage/r.png')}
        />
      </View>
      {/* end welcome note */}

      {/* Search */}
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            backgroundColor: '#F3F3F3',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderRadius: 8,
            paddingHorizontal: 10,
            width: '80%',
          }}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={{marginRight: 5}}
          />
          <TextInput placeholder="Search" style={{width: '100%'}} />
        </View>
        <View
          style={{
            backgroundColor: '#F3F3F3',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            width: '15%',
          }}>
          <Feather
            name="filter"
            size={20}
            color="#000"
            style={{marginRight: 5}}
          />
        </View>
      </View>
      {/* end search */}

      {/*main cards  */}
      <View style={styles.cards}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('DonoteFood')}
          style={styles.card1}>
          <Image
            style={styles.mainCardImage}
            source={require('../../assets/images/ReservePackage/r.png')}
          />
          <Text style={{color: '#fff', fontSize: 22, fontWeight: 'bold'}}>
            {t('donateFood')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('ReservePackage')}
          style={styles.card2}>
          <LinearGradient style={styles.card21} colors={['#D70F64', '#FB6A70']}>
            <Image
              style={styles.mainCardImage}
              source={require('../../assets/images/ReservePackage/r.png')}
            />
            <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
              {t('reservePackage')}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      {/* end main cards */}

      {/* daily deals */}
      <View>
        <Text style={{fontSize: 18, margin: '1%', fontWeight: 'bold'}}>
          Your daily deals
        </Text>

        <View style={{flexDirection: 'row'}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {dummyData.map((data, index) => (
              <LinearGradient
                key={index}
                style={styles.deals1}
                colors={['#FB6A70', '#FCA384']}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}>
                <View style={styles.deals}>
                  <View style={{width: '70%'}}>
                    <Text
                      style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
                      {data.title}
                    </Text>
                    <Text
                      style={{fontWeight: '800', fontSize: 14, color: '#fff'}}>
                      {data.subTitle}
                    </Text>
                    <Text style={{fontSize: 12, color: '#fff'}}>
                      {data.description}
                    </Text>
                  </View>
                  <Image
                    style={styles.dailyDealsCardImage}
                    source={require('../../assets/images/ReservePackage/r.png')}
                  />
                </View>
              </LinearGradient>
            ))}
          </ScrollView>
        </View>
        {/* end daily deals  */}
      </View>
      {/* end daily deals */}
    </View>
  );
};

export default welcome;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '2%',
  },
  mainCardImage: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 300,
  },
  dailyDealsCardImage: {
    width: 80,
    height: 80,
    borderRadius: 300,
  },
  welcome: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    //  paddingVertical : '5%'
  },
  welcomeText: {
    width: '70%',
  },
  deals: {
    flexDirection: 'row',
  },

  deals1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: width - 50,
    height: 104,
    marginRight: 10,
    borderRadius: 10,
  },

  welcomeImg: {
    width: 100,
    height: 106,
  },
  goodEvening: {
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 25,
  },
  line: {
    marginVertical: 5,
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 20,
  },
  cards: {
    flexDirection: 'row',
    width: '96%',
    marginVertical: '4%',
    height: '35%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  card1: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#29B82E',
    borderRadius: 10,
    marginHorizontal: '1%',
  },
  card2: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
    marginHorizontal: '1%',
  },
  card21: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
    marginHorizontal: '1%',
  },
  view: {
    backgroundColor: 'blue',
    width: '80%',
    marginRight: '2%',
    marginTop: '1%',
    height: 100,
    borderRadius: 10,
  },
});
