import React from 'react';
import {View, Text} from 'react-native';
import {useFormikContext} from 'formik';
import AppTextInput from './AppTextInput';
import ValidationErrorMessage from './ValidationErrorMessage';
import {hp, wp} from '../../../Utills/CommonMethods/CommonMethods';
import colors from '../../../Assets/Colors/colors';

// import colors from '../../../assets/colors/colors';
// import {hp} from '../../../utils/CommonMethods';
// import fonts from '../../../assets/fonts/fonts';
// import MaskInput from 'react-native-mask-input';
// import AppTextInput from './AppTextInput';
// import colors from '../../../assets/colors/colors';
// import { hp, wp } from '../../../Utills/CommonMethods/CommonMethods';
// import ValidationErrorMessage from './ValidationErrorMessage';

function AppFromField({
  name,
  editable,
  floatingLabel,
  width = wp(90),
  label,
  labelFontFamily = 'Poppins_Medium',
  onRightIconPress,
  borderWidth = 1,
  borderColor = colors.primaryColor,
  borderRadius = 15,
  maskInput,
  padding,
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

  return (
    <View>
      {label && (
        <Text
          style={{
            // fontSize: fonts.H10,
            textAlign: 'left',
            marginLeft: '2%',
            fontWeight: 'bold',
            color: 'white',
            // color: colors.primary,
          }}>
          {label}
        </Text>
      )}

      {maskInput ? (
        <MaskInput
          style={{
            borderRadius: 10,
            borderWidth: 1,
            // color: colors.BLACK,

            ...Platform.select({
              ios: {
                padding: hp(1.7),
              },
              android: {
                padding: hp(1.25),
              },
            }),
            marginVertical: 10,
            borderColor: 'red',

            backgroundColor: 'white',
            textDecorationLine: 'none',
          }}
          showObfuscatedValue={true}
          // placeholderFillCharacter="*"
          onBlur={() => setFieldTouched(name)}
          //   backgroundColor={colors.WHITE}
          backgroundColor={'white'}
          width={width}
          editable={editable}
          borderWidth={borderWidth}
          borderColor={borderColor}
          borderRadius={borderRadius}
          value={values[name]}
          onChangeText={text => setFieldValue(name, text)}
          mask={[
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,

            '-',

            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,

            '-',
            /\d/,
          ]}
          {...otherProps}
        />
      ) : (
        <AppTextInput
          floatingLabel={floatingLabel}
          onRightIconPress={onRightIconPress}
          onBlur={() => setFieldTouched(name)}
          //   backgroundColor={colors.WHITE}
          backgroundColor={'white'}
          onChangeText={text => setFieldValue(name, text)}
          // value={values[name]}
          width={width}
          editable={editable}
          borderWidth={borderWidth}
          borderColor={borderColor}
          borderRadius={borderRadius}
          padding={padding}
          // numberOfLines={numberOfLines}
          {...otherProps}
        />
      )}
      <ValidationErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

export default AppFromField;
