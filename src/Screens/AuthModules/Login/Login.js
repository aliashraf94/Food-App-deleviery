import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {hp, wp} from '../../../Utills/CommonMethods/CommonMethods';
import AppButton from '../../../Components/Common/AppButton';
import AppForm from '../../../Components/Common/FormComponents/AppFrom';
import * as Yup from 'yup';
import AppFromField from '../../../Components/Common/FormComponents/AppFromField';
import AppMobileNoInputField from '../../../Components/Common/FormComponents/AppMobileNoInputField';
import SubmitButton from '../../../Components/Common/FormComponents/SubmitButton';
import {eyeCloseIcon, eyeIcon} from '../../../Assets/SVG/SvgImages';
import CommonText from '../../../Utills/CommonText';
import fonts from '../../../Assets/Fonts/fonts';
import colors from '../../../Assets/Colors/colors';
import auth from '@react-native-firebase/auth';
import Loader from '../../../Components/Common/Loader/Loader';
import Toast from 'react-native-toast-message';
import Images from '../../../Assets/Images';

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [getUser, setGetUser] = useState();

  const initialValues = {
    email: '',
    passwor: '',
  };

  const numberReg = /^[0-9]+$/;
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Eenter email must be a valid')
      .required('Email is a required field'),
    passwor: Yup.string()
      .matches(numberReg, 'Enter only numbers')
      .required('Phone no is a required field'),
  });

  const LoginFunction = value => {
    console.log('==value===>>>', value);
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(value.email, value.passwor)
      .then(() => {
        Toast.show({
          type: 'success',
          text1: 'LogedIn successfully',
          // text2: 'Please check your internet connection',
          position: 'top',
        });
        console.log(' Logged in!');
        navigation.navigate('Dashboard');
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        if (error.code === 'auth/email-already-in-use') {
          console.log('Email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('Email address is invalid!');
        }
        console.error(error);
        Toast.show({
          type: 'error',
          text1: 'Email or password is wrong',
          text2: 'Please check enter again email or password',
          position: 'top',
        });
      });
    // navigation.navigate('Tabs');
  };

  return (
    <ImageBackground
      source={Images.LoginSignUpBG}
      style={styles.imageStyle}
      resizeMode={'cover'}>
      {loading && <Loader isloading={loading} />}
      <View
        style={{
          flex: 0.3,
          width: wp(100),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* <TouchableOpacity
          onPress={() => getUserInformation()}
          style={{
            borderWidth: 1,
            height: hp(5),
            width: wp(15),
            backgroundColor: 'red',
            borderRadius: hp(1),
          }}></TouchableOpacity> */}
      </View>

      <View
        style={{
          flex: 0.5,
          width: wp(100),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ImageBackground
          style={styles.textInputView}
          source={Images.textInputBG}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <AppForm
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={LoginFunction}>
              <AppFromField
                borderWidth={1}
                width={wp(85)}
                floatingLabel={'Email'}
                // label="Email"
                placeholder={'Please enter your email'}
                autoCorrect={false}
                autoCapitalize="none"
                // placeholderTextColor={colors.placeHolderColor}
                name="email"
              />
              <AppFromField
                labelColor={colors.WHITE}
                onRightIconPress={() => setVisiblePassword(!visiblePassword)}
                // label="Password"
                floatingLabel={'Password'}
                width={wp(85)}
                backgroundColor={'white'}
                placeholderTextColor={colors.placeHolderColor}
                placeholder="Enter your password"
                autoCapitalize="none"
                name="passwor"
                autoCorrect={false}
                onRightIconPress={() => setIsSecureEntry(!isSecureEntry)}
                rightSvgIcon={isSecureEntry ? eyeCloseIcon : eyeIcon}
                secureTextEntry={isSecureEntry}
                TextContentType="password"
                borderWidth={1}
                borderColor={colors.RED_COLOR}
              />

              <SubmitButton backgroundColor={'black'} title={'Sign In'} />
              <View style={styles.textWarp}>
                <Text style={styles.dontaccoutText}>
                  {CommonText.DontHaveAnAccount}{' '}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                  <Text style={styles.signupText}>{'Sign Up'}</Text>
                </TouchableOpacity>
              </View>
            </AppForm>
          </View>
        </ImageBackground>
      </View>

      <View style={{flex: 0.2, width: wp(100)}}></View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  imageStyle: {
    flex: 1,
    alignItems: 'center',
  },
  textInputView: {
    // borderWidth: 1,
    height: hp(50),
    width: hp(50),
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    // borderWidth: 1,
    width: wp(100),
  },
  ButtonView: {
    alignItems: 'center',
    // flex: 0.75,
    justifyContent: 'center',
    // borderWidth: 1,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWarp: {
    alignItems: 'center',
    //backgroundColor: "red",
    textAlign: 'center',
    // justifyContent: "center",
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dontaccoutText: {
    color: colors.BLACK,
    fontSize: fonts.H7,
    // paddingBottom: hp(1.5),
  },
  signupText: {
    color: colors.BLACK,
    fontWeight: 'bold',
    fontSize: fonts.H7,
  },
  phoneFieldContainer: {
    width: wp(89),
    borderRadius: 10,
    marginTop: '2.5%',
    marginBottom: '2%',
    borderColor: colors.primaryColor,
    // borderWidth: 1,
    // backgroundColor: 'red',
    // height: hp(4),
    // marginVertical: -20,
  },
  phoneNoTextCon: {
    paddingVertical: Platform.OS === 'android' ? hp(0.15) : hp(1.4),
    justifyContent: 'center',
    borderRadius: 10,
    // backgroundColor: colors.WHITE,
    borderBottomWidth: 0.05,
    // backgroundColor: 'red',
  },
  phoneNoInputcon: {
    backgroundColor: 'white',
    paddingVertical: Platform.OS === 'android' ? hp(1.15) : hp(0.15),
  },
  codeTextStyle: {
    paddingVertical: Platform.OS === 'android' ? hp(0.15) : hp(0.15),
  },
});
