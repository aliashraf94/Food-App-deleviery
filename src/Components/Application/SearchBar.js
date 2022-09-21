import React from 'react';
import {View, Text, Image} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Images from '../../Assets/Images';
import {hp, wp} from '../../Utills/CommonMethods/CommonMethods';
import colors from '../../Assets/Colors/colors';

export default function SearchBar({cityHandler}) {
  //   const data = [
  //     {id: 1, name: 'Dubai'},
  //     {id: 2, name: 'Pakistan'},
  //     {id: 3, name: 'Canada'},
  //   ];
  return (
    <View
      style={{
        marginTop: 15,
        flexDirection: 'row',
        width: wp(94),
        alignItems: 'center',
        marginBottom: hp(1),
      }}>
      <GooglePlacesAutocomplete
        query={{
          key: data,
          // key: 'https://countriesnow.space/api/v0.1/countries/population/cities',
          // language: 'en',
        }}
        onPress={(data, details = null) => {
          console.log(data.description);
          const city = data.description.split(',')[0];
          cityHandler(city);
        }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 5,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            // marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{marginLeft: 10}}>
            <Image
              source={Images.searchIcon}
              style={{height: hp(3), width: hp(3)}}
            />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: 'row',
              marginRight: 8,
              backgroundColor: colors.DEEP_PURPLE,
              padding: 9,
              borderRadius: 30,
              alignItems: 'center',
            }}>
            <Text style={{color: colors.WHITE}}>Search</Text>
          </View>
        )}
      />
    </View>
  );
}
