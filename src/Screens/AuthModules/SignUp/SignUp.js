import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
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
import Images from '../../../Assets/Images';
import Toast from 'react-native-toast-message';

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [isSecureEntry, setIsSecureEntry] = useState(true);

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

  const SignUpFunc = value => {
    console.log('===fields===data====>>>', value);
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(value.email, value.passwor)
      .then(() => {
        Toast.show({
          type: 'success',
          text1: 'Sign Up successfully',
          position: 'top',
        });
        navigation.navigate('Splash');
      })
      .catch(error => {
        setLoading(false);
        if (error.code === 'auth/email-already-in-use') {
          Toast.show({
            type: 'error',
            text1: 'email address is already in use!',
            text2: 'email address is already in use!',
            position: 'top',
          });
        }
        if (error.code === 'auth/invalid-email') {
          Alert.alert('email address is invalid!');
        }
        console.error(error);
      });
  };

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <ImageBackground
        source={Images.LoginSignUpBG}
        style={styles.imageStyle}
        resizeMode={'cover'}>
        {loading && <Loader isloading={loading} />}

        <View style={{flex: 0.3, width: wp(100)}}></View>

        <View
          style={{
            // borderWidth: 1,
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
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <AppForm
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={SignUpFunc}>
                  <AppFromField
                    borderWidth={1}
                    floatingLabel={'Email'}
                    // label="Email"
                    placeholder={'Please enter your email'}
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholderTextColor={colors.placeHolderColor}
                    name="email"
                  />
                  <AppFromField
                    labelColor={colors.WHITE}
                    onRightIconPress={() =>
                      setVisiblePassword(!visiblePassword)
                    }
                    // label="Password"
                    floatingLabel={'Password'}
                    width={wp(90)}
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

                  <SubmitButton backgroundColor={'black'} title={'Sign Up'} />
                  <View style={styles.textWarp}>
                    <Text style={styles.dontaccoutText}>
                      {CommonText.DontHaveAnAccount}{' '}
                    </Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Login')}>
                      <Text style={styles.signupText}>{'LogIn'}</Text>
                    </TouchableOpacity>
                  </View>
                </AppForm>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={{flex: 0.2, width: wp(100)}}></View>
        {/* <View style={styles.imageView}>
          <Image style={styles.logoTextView} source={Images.splashLogo} />
        </View> */}
        {/* <View style={styles.ButtonView}>
          <View style={styles.inputContainer}>
            
        </View> */}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  imageStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoTextView: {
    height: hp('16'),
    width: hp('16'),
    resizeMode: 'contain',
  },
  imageView: {
    width: wp(100),
    alignItems: 'center',
    flex: 0.25,
    justifyContent: 'center',
  },
  ButtonView: {
    alignItems: 'center',
    flex: 0.75,
    justifyContent: 'center',
  },
  textInputView: {
    height: hp(50),
    width: hp(50),
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWarp: {
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dontaccoutText: {
    color: colors.BLACK,
    fontSize: fonts.H7,
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
    borderWidth: 1,
  },
  phoneNoTextCon: {
    paddingVertical: Platform.OS === 'android' ? hp(0.15) : hp(1.4),
    justifyContent: 'center',
    borderRadius: 10,
    borderBottomWidth: 0.05,
  },
  phoneNoInputcon: {
    backgroundColor: 'white',
    paddingVertical: Platform.OS === 'android' ? hp(1.15) : hp(0.15),
  },
  codeTextStyle: {
    paddingVertical: Platform.OS === 'android' ? hp(0.15) : hp(0.15),
  },
});
