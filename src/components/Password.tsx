import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import fonts from '../assets/fonts';
import {ClosedEye, OpenEye} from '../assets/icons';
import colors from '../global/colors';
import {getFontSize, height} from '../global/helper';

const PasswordTextInput = ({
  label = 'PASSWORD',
  value = '',
  onChangeText = () => {},
  placeholder = '**********',
  style = {},
  onBlur,
  onFocus,
  ...props
}: any) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer, style]}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholderTextColor={colors.placeHolderColor}
          secureTextEntry={secureTextEntry}
          style={styles.input}
          autoCapitalize="none"
          autoComplete="password"
          {...props}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.toggleButton}>
          {secureTextEntry ? <OpenEye /> : <ClosedEye />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: height(2),
  },
  label: {
    fontSize: getFontSize(12),
    color: colors.black,
    fontFamily: fonts.regular,
    marginBottom: height(8),
    textTransform: 'uppercase',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: height(62),
    borderColor: colors.textInputBackground,
    borderWidth: 1,
    borderRadius: getFontSize(8),
    fontSize: getFontSize(14),
    color: colors.black,
    fontFamily: fonts.regular,
    backgroundColor: colors.textInputBackground,
  },
  input: {
    flex: 1,
    fontSize: getFontSize(14),
    color: colors.black,
    fontFamily: fonts.regular,
    marginHorizontal: getFontSize(19),
  },
  toggleButton: {
    padding: 10,
  },
});

export default PasswordTextInput;
