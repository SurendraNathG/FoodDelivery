import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import fonts from '../assets/fonts';
import colors from '../global/colors';
import {getFontSize, height} from '../global/helper';

const EmailTextInput = ({
  label = 'EMAIl',
  value = '',
  onChangeText = () => {},
  placeholder = 'example@gmail.com',
  keyboardType = 'email-address',
  style = {},
  onFocus,
  onBlur,
  autoCapitalize = 'none',
  autoComplete = 'email',
  wrapperStyle = {},
  ...props
}: any) => {
  return (
    <View style={[styles.container, wrapperStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholderTextColor={colors.placeHolderColor}
        style={[styles.input, style]}
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: height(16),
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

export default EmailTextInput;
