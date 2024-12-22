import React, {forwardRef} from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import fonts from '../assets/fonts';
import colors from '../global/colors';
import {getFontSize, height, width} from '../global/helper';

const NumberInput = forwardRef<TextInput, TextInputProps>(
  (
    {
      value = '',
      onChangeText = () => {},
      placeholder = '0',
      keyboardType,
      style = {},
      onBlur,
      onFocus,
      onSubmitEditing,
      ...props
    }: TextInputProps,
    ref,
  ) => {
    return (
      <View style={styles.container}>
        <TextInput
          value={value}
          ref={ref}
          onChangeText={onChangeText}
          placeholder={placeholder}
          onBlur={onBlur}
          onFocus={onFocus}
          maxLength={1}
          selection={{start: 0, end: 1}}
          onSubmitEditing={onSubmitEditing}
          placeholderTextColor={colors.placeHolderColor}
          keyboardType={'decimal-pad'}
          style={[styles.input, style]}
          {...props}
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    marginTop: height(20),
  },
  input: {
    height: height(62),
    width: width(62),
    borderColor: colors.textInputBackground,
    borderWidth: 1,
    borderRadius: getFontSize(8),
    fontSize: getFontSize(16),
    color: colors.black,
    fontFamily: fonts.bold,
    paddingHorizontal: width(24),
    textAlign: 'right',
    backgroundColor: colors.textInputBackground,
  },
});

export default NumberInput;
