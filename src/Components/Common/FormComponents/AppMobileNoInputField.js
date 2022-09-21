import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useFormikContext} from 'formik';

import ValidationErrorMessage from './ValidationErrorMessage';
// import MaskInput from 'react-native-mask-input';
import PhoneInput from 'react-native-phone-number-input';
import colors from '../../../Assets/Colors/colors';
import fonts from '../../../Assets/Fonts/fonts';
// import ValidationErrorMessage from "../Components/ValidationErrorMessage";

//import ValidationErrorMessage from "./ValidationErrorMessage";

function AppMobileNoInputField({
  name,
  editable,
  width,
  label,
  labelFontFamily = 'Poppins_Medium',
  onRightIconPress,
  borderWidth,
  borderColor,
  borderRadius,
  maskInput,
  valid,
  setIsValid,
  placeholder,
  //   formattedValue,
  //   setFormattedValue,
  formatedMobileNO,
  setFormatedMobileNO,
  floatingLabel,
  placeholderTextColor,
  // numberOfLines,
  ...otherProps
}) {
  const {
    handleChange,
    setFieldValue,
    setFieldTouched,
    touched,
    errors,
    values,
  } = useFormikContext();
  const phoneInput = useRef(null);
  const [formattedValue, setFormattedValue] = useState('');
  const [value, setValue] = useState('');
  //console.log('asdsda', phoneInput.current?.isValidNumber(value));
  // console.log('lalsdlasd', a, formattedValue);
  useEffect(() => {
    setFormatedMobileNO(
      phoneInput?.current?.getNumberAfterPossiblyEliminatingZero(
        value,
        formattedValue,
      ).formattedNumber,
    );
    // console.log(
    //   phoneInput.current?.getNumberAfterPossiblyEliminatingZero(
    //     value,
    //     formattedValue
    //   ).formattedNumber
    // );
  }, [value]);
  return (
    <View>
      {label && (
        <Text
          style={{
            fontSize: fonts.H9,
            textAlign: 'left',
            marginLeft: '2%',
            fontWeight: 'bold',
            color: colors.WHITE,
          }}>
          {label}
        </Text>
      )}

      {floatingLabel && (
        <View style={styles.floatingLabelContainer}>
          <Text style={styles.floatingLabel}>{floatingLabel}</Text>
        </View>
      )}
      <PhoneInput
        ref={phoneInput}
        // defaultValue={values[name]}
        placeholder={placeholder}
        value={values[name]}
        defaultCode="FI"
        layout="first"
        onChangeText={text => {
          setFieldValue(name, text);
          setValue(text);
          setIsValid(phoneInput.current?.isValidNumber(text));
        }}
        textInputProps={{placeholderTextColor: placeholderTextColor}}
        //  onChangeText={text => setValue(text)}
        onChangeFormattedText={text => {
          setFormattedValue(text);
        }}
        {...otherProps}
      />

      <ValidationErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

export default AppMobileNoInputField;
const styles = StyleSheet.create({
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
    fontWeight: '500',
  },
});
