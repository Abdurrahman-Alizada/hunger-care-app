import React, {useState} from 'react';
import {
  Pressable,
  StatusBar,
  ScrollView,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const {width} = Dimensions.get('window');
import Feather from 'react-native-vector-icons/Feather';
import {Appbar, Button, IconButton, Colors} from 'react-native-paper';

const donatedFoodMain = ({navigation}) => {
  const [donatedFoods, setDonatedFoods] = useState([
    {
      donarName: 'Baaz Muhammad',
      donarLocation: 'Charsadda Chowk',
      availablePackages: 60,
      totalDistributedPackages: 100,
    },
    {
      donarName: 'Baaz Muhammad',
      donarLocation: 'Charsadda Chowk',
      availablePackages: 60,
      totalDistributedPackages: 100,
    },
  ]);

  const [donorsNearBy, setdonorsNearBy] = useState([
    {
      donarName: 'Baaz Muhammad',
      description: 'Biryani, Chicken, Rice. some description',
      donatedPackages: 60,
      isFavorite: true,
    },
    {
      donarName: 'Baaz Muhammad',
      description: 'Biryani, Chicken, Rice. some description',
      donatedPackages: 60,
      isFavorite: false,
    },
    {
      donarName: 'Baaz Muhammad',
      description: 'Biryani, Chicken, Rice. some description',
      donatedPackages: 60,
      isFavorite: true,
    },
  ]);

  const [isSearch, setIsSearch] = useState(false);

  return (
    <SafeAreaView style={styles.reserveMain}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Appbar.Header style={{backgroundColor: '#fff'}}>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="University" subtitle={'Charsadda Chowk'} />

        <Appbar.Action icon="magnify" onPress={() => setIsSearch(!isSearch)} />
        <Appbar.Action
          icon="dots-vertical"
          onPress={() => console.log('dots')}
        />
      </Appbar.Header>

      <View style={styles.reserve}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Search */}
          {isSearch ? (
            <View style={styles.reserveSearch}>
              <Feather
                name="search"
                size={20}
                color="#C6C6C6"
                style={{marginRight: 5}}
              />
              <TextInput placeholder="Search" style={{width: '90%'}} />
            </View>
          ) : (
            <></>
          )}

          {/* end search */}

          {/* Dynamic Card for advertisment or some announcemet */}
          <LinearGradient
            style={styles.deals1}
            colors={['#FB6A70', '#FCA384']}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}>
            <View style={styles.deals}>
              <View style={{width: '70%'}}>
                <Text style={styles.adsHeading}>Donated food</Text>
                <Text style={styles.adsDescription}>
                  People want to donate food. Below is some packages. if you
                  deserve, reserve a package and pickup for youself
                </Text>
                {/* <Text style={{ fontSize : 12, color : '#fff'}}>{data.description}</Text> */}
              </View>
              <Image
                style={styles.dailyDealsCardImage}
                source={require('../../assets/images/ReservePackage/r.png')}
              />
            </View>
          </LinearGradient>

          {/* End of Dynamic Card for advertisment or some announcemet */}

          {/* food cards */}
          <View style={styles.foodCardMain}>
            {donatedFoods.map((food, index) => (
              <Pressable
                onPress={() => {
                  /* 1. Navigate to the ReservePackageDetail route with params */
                  navigation.navigate('ReservePackageDetail', {
                    itemId: 86,
                    otherParam: 'anything you want here',
                  });
                }}
                key={index}
                style={styles.foodCard}>
                <View>
                  <Image
                    source={require('../../assets/images/ReservePackage/food.png')}
                    style={styles.foodCardImage}
                  />
                </View>
                <View style={{padding: 10}}>
                  <View style={styles.foodCardDetails}>
                    <View>
                      <Text style={styles.donorName}>Baaz Muhammad</Text>
                      <Text style={styles.donorLocation}>Charsadda Chowk</Text>
                    </View>
                    <View style={styles.totalDonationButton}>
                      <Text style={styles.totalDonationNumber}>
                        60{' '}
                        <Text style={styles.totalDonationText}>
                          packages available
                        </Text>
                      </Text>
                    </View>
                  </View>
                  <View style={styles.bottomLine}>
                    <Text style={styles.bottomLineText}>
                      Total <Text style={styles.bottomLineNumber}>100</Text>{' '}
                      Pacakges distributed
                    </Text>
                  </View>
                </View>
              </Pressable>
            ))}
            <Button
              mode="outlined"
              style={styles.loadMoreButton}
              onPress={() => console.log('Pressed')}>
              <Text style={{color: '#333'}}>load more</Text>
            </Button>
            {/*  (popula donor in your area) */}
            <View style={styles.popularDonors}>
              <Text style={styles.popularDonorsTitle}>
                Popular Donors in your area
              </Text>
              <Text>256 Restaurants near you</Text>
              {/* tags start */}
              <ScrollView horizontal={true} style={{}}>
                <Button
                  mode="outlined"
                  style={styles.tag}
                  onPress={() => console.log('Pressed')}>
                  <Text style={{color: '#333'}}>Rescued</Text>
                </Button>
                <Button
                  mode="outlined"
                  style={styles.tag}
                  onPress={() => console.log('Pressed')}>
                  <Text style={{color: '#333'}}>Offer</Text>
                </Button>
                <Button
                  mode="outlined"
                  style={styles.tag}
                  onPress={() => console.log('Pressed')}>
                  <Text style={{color: '#333'}}>Rescued</Text>
                </Button>
                <Button
                  mode="outlined"
                  style={styles.tag}
                  onPress={() => console.log('Pressed')}>
                  <Text style={{color: '#333'}}>Rescued</Text>
                </Button>
                <Button
                  mode="outlined"
                  style={styles.tag}
                  onPress={() => console.log('Pressed')}>
                  <Text style={{color: '#333'}}>Rescued</Text>
                </Button>
              </ScrollView>
              {/* end tags */}
              {/* donors cards */}
              <View style={styles.popularDonorMain}>
                {donorsNearBy.map((donarNearby, index) => (
                  <View key={index} style={styles.popularDonor}>
                    <Image
                      style={styles.popularDonorImage}
                      source={require('../../assets/images/ReservePackage/kfc.png')}
                    />
                    <View style={styles.popularDonorDetails}>
                      <Text style={styles.popularDonorName}>
                        {donarNearby.donarName}
                      </Text>
                      <Text style={{fontSize: 14}}>
                        {donarNearby.description}
                      </Text>
                      <View style={styles.popularDonorCardBottom}>
                        <View style={styles.popularDonorCardButton}>
                          <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                            {donarNearby.donatedPackages}{' '}
                            <Text style={{fontWeight: 'normal'}}>
                              packages distributed
                            </Text>
                          </Text>
                        </View>
                        <IconButton
                          icon={
                            donarNearby.isFavorite ? 'heart-outline' : 'heart'
                          }
                          color={Colors.blueGrey500}
                          size={30}
                          onPress={() => console.log('Pressed')}
                        />
                      </View>
                    </View>
                  </View>
                ))}
                <Button
                  mode="outlined"
                  style={styles.popularDonorViewAll}
                  onPress={() => console.log('Pressed')}>
                  <Text style={{color: '#333'}}>View All</Text>
                </Button>
              </View>
            </View>
          </View>
          {/* end of food cards */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default donatedFoodMain;

const styles = StyleSheet.create({
  deals1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 120,
    marginVertical: '5%',
    borderRadius: 10,
  },
  deals: {
    flexDirection: 'row',
  },
  SectionStyle: {
    marginVertical: 10,
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

  dailyDealsCardImage: {
    width: 80,
    height: 80,
    borderRadius: 300,
  },
  reserveMain: {
    backgroundColor: '#fff',
    marginBottom: 50,
  },
  reserve: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  reserveSearch: {
    backgroundColor: '#F3F3F3',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  adsHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  adsDescription: {
    fontWeight: '800',
    fontSize: 14,
    color: '#fff',
  },
  foodCardMain: {
    justifyContent: 'center',
    marginBottom: 80,
  },
  foodCard: {
    backgroundColor: '#eee',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 5,
  },
  foodCardImage: {
    height: 135,
    width: '100%',
  },
  foodCardDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  donorName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  donorLocation: {
    color: '#707070',
    paddingTop: 2,
    fontWeight: '400',
    fontSize: 14,
  },
  totalDonationButton: {
    borderRadius: 10,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    backgroundColor: '#509807',
  },
  totalDonationNumber: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  totalDonationText: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  bottomLine: {
    flexDirection: 'row',
    paddingVertical: '2%',
  },
  bottomLineText: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  bottomLineNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#509807',
  },
  loadMoreButton: {
    width: '50%',
    height: 40,
    marginVertical: 10,
    borderRadius: 20,
    alignSelf: 'center',
  },

  popularDonors: {
    marginVertical: 5,
  },
  popularDonorsTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  tag: {
    width: 130,
    height: 40,
    margin: 5,
    borderRadius: 20,
    alignSelf: 'center',
  },
  popularDonorMain: {
    marginVertical: 5,
  },
  popularDonor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  popularDonorImage: {
    width: '20%',
    height: '50%',
    borderRadius: 500,
  },
  popularDonorDetails: {
    width: '75%',
  },
  popularDonorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  popularDonorCardBottom: {
    flexDirection: 'row',
    marginVertical: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  popularDonorCardButton: {
    borderRadius: 20,
    borderColor: '#333',
    borderWidth: 0.5,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },
  popularDonorViewAll: {
    width: '50%',
    height: 40,
    marginVertical: 10,
    borderRadius: 20,
    alignSelf: 'center',
  },
});
