import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import colors from '../../Assets/Colors/colors';
import {hp, wp} from '../../Utills/CommonMethods/CommonMethods';
import Header from '../../Components/Common/Header/Header';
import Images from '../../Assets/Images';
import Loader from '../../Components/Common/Loader/Loader';
import Toast from 'react-native-toast-message';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderTab from '../../Components/Application/HeaderTab';
import SearchBar from '../../Components/Application/SearchBar';
import Categories from '../../Components/Application/Categories';
import {Divider} from 'react-native-elements';
import RestaurantItems, {
  localRestaurants,
} from '../../Components/Application/RestaurantItems';
import BottomTabs from '../../Components/Application/BottomTabs';
const YELP_API_KEY =
  'xD1uchxNBYAZ8ugAKWG6DIvWA9yISb9PzCvkmjSU2QokYfKp2EnMd9rIO3qb4CpgWKn1Z-4DaQXa04OpRBGIKYYUcvDItX637FKjcMxSz76A3xbArugQVtkUq_dTYXYx';

const Dashboard = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState('San Francisco');
  const [activeTab, setActiveTab] = useState('Delivery');
  const [restaurantData, setRestaurantData] = useState(localRestaurants);

  /*==========log Out Function==========*/
  const logout = () => {
    auth()
      .signOut()
      .then(() => {
        setLoading(true);
        console.log('User signed out!');
        Toast.show({
          type: 'success',
          text1: 'Successfully User Sign Out',
          position: 'top',
        });
        navigation.navigate('Splash');
        setLoading(false);
      });
  };
  /*==========log Out Function end==========*/

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then(res => res.json())
      .then(json =>
        setRestaurantData(
          json.businesses.filter(business =>
            business.transactions.includes(activeTab.toLowerCase()),
          ),
        ),
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  const logOutFunc = useLogout => {
    console.log('===useLogout===>>>', useLogout);
    setLoading(true);
    auth()
      .signOut()
      .then(() => {
        Toast.show({
          type: 'success',
          text1: 'Successfully User Sign Out',
          position: 'top',
        });
        navigation.navigate('Login');
      });
  };

  return (
    <ImageBackground
      source={Images.backgroungImage}
      style={styles.imageStyle}
      resizeMode={'cover'}>
      {loading && <Loader isloading={loading} />}

      <SafeAreaView style={styles.imageView}>
        <View
          style={{
            width: wp(100),
            height: hp(7),
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: colors.DEEP_PURPLE,
          }}>
          <TouchableOpacity
            style={{
              height: hp(4),
              width: hp(8),
              backgroundColor: colors.DEEP_PURPLE,
              borderRadius: hp(15),
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
            }}></TouchableOpacity>
          <View>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 24}}>
              DASHBOARD
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => logout()}
            style={{
              borderWidth: 1.5,
              borderColor: 'white',
              height: hp(4),
              width: hp(8),
              backgroundColor: 'black',
              borderRadius: hp(15),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Log Out</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: 1,
            width: wp(100),
            marginTop: hp(1),
            alignItems: 'center',
          }}>
          <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
          <SearchBar cityHandler={setCity} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories />
          <RestaurantItems
            restaurantData={restaurantData}
            navigation={navigation}
          />
        </ScrollView>
        {/* <Divider width={1} />
        <BottomTabs /> */}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  imageStyle: {
    flex: 1,
    alignItems: 'center',
  },
  logoTextView: {
    height: hp('30'),
    width: hp('30'),
    resizeMode: 'contain',
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
