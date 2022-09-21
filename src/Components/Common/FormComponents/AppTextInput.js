import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Platform,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import SvgComponent from '../SvgCustomComponents/SvgCustomComponents';
import {hp, wp} from '../../../Utills/CommonMethods/CommonMethods';
import colors from '../../../Assets/Colors/colors';

function AppTextInput({
  leftIcon,
  rightIcon,
  floatingLabel,
  changeIconLibrary = false,
  width = wp(96),
  backgroundColor = colors.WHITE,
  changeinputField,
  top = 4,
  marginRight = 0,
  editable,
  leftSvgIcon,
  rightSvgIcon,
  //svgimageIconPath,
  onRightIconPress,
  borderWidth,
  borderColor = colors.WHITE,
  borderRadius = 10,
  padding = Platform.OS === 'android' ? hp(1.4) : hp(1.7),
  ...otherProps
}) {
  return (
    <>
      {floatingLabel && (
        <View style={styles.floatingLabelContainer}>
          <Text style={styles.floatingLabel}>{floatingLabel}</Text>
        </View>
      )}
      <View
        style={[
          styles.container,
          {
            width,
            backgroundColor: backgroundColor,
            borderWidth: borderWidth ? borderWidth : 0.6,
            borderColor: borderColor,
            borderRadius: borderRadius,
          },
        ]}>
        {leftSvgIcon && (
          <View
            style={{
              marginLeft: '3%',
              alignSelf: 'center',
            }}>
            <SvgComponent svgMarkup={leftSvgIcon} />
          </View>
        )}

        <TextInput
          editable={editable}
          placeholderTextColor={colors.placeholderColor}
          style={[
            // defaultStyles.text,
            {
              padding: padding,
              marginRight: marginRight,
              width: rightSvgIcon ? '88%' : '93%',
              textAlign: 'justify',
              color: colors.BLACK,
              marginLeft: '1.5%',
              // backgroundColor: colors.BLACK,
            },
          ]}
          {...otherProps}
        />
        {rightSvgIcon && (
          <TouchableOpacity
            onPress={onRightIconPress}
            style={{
              flex: 1,
              alignItems: 'flex-end',
              ...Platform.select({
                android: {
                  marginRight: '2%',
                },
              }),

              marginRight: '3%',
            }}>
            <SvgComponent svgMarkup={rightSvgIcon} />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',

    ...Platform.select({
      ios: {
        // padding: hp(1.7),
      },
      android: {
        // padding: hp(0.1),
      },
    }),
    marginVertical: 10,
    borderColor: colors.primary,
    // shadowColor: '#000',
    // shadowOffset: {width: 0.6, height: 0.4},
    // shadowOpacity: 0.2,
    // shadowRadius: 2,
    // elevation: 9,
    backgroundColor: colors.WHITE,
  },
  icon: {
    marginRight: 10,
  },
  floatingLabelContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    zIndex: 1,
    left: 20,
    top: 1,
    // flex: 1,
    // flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingLabel: {
    textAlign: 'center',
    // alignSelf: "center",
    marginLeft: '2%',
    marginRight: '2%',
    color: colors.primaryColor,
    fontWeight: '600',
  },
});

export default AppTextInput;
