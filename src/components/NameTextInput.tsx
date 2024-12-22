import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import fonts from '../assets/fonts';
import colors from '../global/colors';
import {getFontSize, height} from '../global/helper';

const NameTextInput = ({
  label = 'NAME',
  value = '',
  onChangeText = () => {},
  placeholder = 'John deo',
  keyboardType,
  style = {},
  onBlur,
  onFocus,
  ...props
}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholderTextColor={colors.placeHolderColor}
        keyboardType={keyboardType}
        style={[styles.input, style]}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  label: {
    fontSize: getFontSize(12),
    color: colors.black,
    fontFamily: fonts.regular,
    marginBottom: height(8),
  },
  input: {
    height: height(62),
    borderColor: colors.textInputBackground,
    borderWidth: 1,
    borderRadius: getFontSize(8),
    fontSize: getFontSize(14),
    color: colors.black,
    fontFamily: fonts.regular,
    paddingHorizontal: getFontSize(19),
    backgroundColor: colors.textInputBackground,
  },
});

export default NameTextInput;
