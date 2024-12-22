import React, {useState} from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import Button from '../../components/Button';
import EmailTextInput from '../../components/EmailTextInput';
import Label from '../../components/Label';
import {showToast} from '../../global/Toast';
import colors from '../../global/colors';
import {height, width} from '../../global/helper';
import screenNames from '../../global/screenNames';
import strings from '../../global/strings';
import useNavigation from '../../global/useNavigation';
import {isEmailValid, validateEmail} from '../../global/utilities';
import {useAppSelector} from '../../store';
import BackGround from './BackGround';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | null>('');
  const {userData} = useAppSelector(state => state.user);

  function handleEmailBlur() {
    setEmailError(validateEmail(email));
  }
  function handleEmailFocus() {
    setEmailError('');
  }
  function handleSendCode() {
    Keyboard.dismiss();
    if (!isEmailValid(email)) {
      setEmailError(validateEmail(email));
    } else if (
      isEmailValid(email) &&
      email?.toLowerCase() !== userData?.email?.toLowerCase()
    ) {
      showToast({
        bottom: 187,
        message: 'Given email does not exist',
        type: 'error',
      });
    } else {
      showToast({
        bottom: 187,
        message: 'Email validated successfully',
        type: 'success',
      });
      setTimeout(() => {
        setEmail('');
        navigation.navigate(screenNames.otpVerification);
      }, 2000);
    }
  }
  function handleBack() {
    navigation.goBack();
  }

  return (
    <BackGround
      title={strings.forgotPassword}
      description={strings.pleaseSign_inAccount}
      back={true}
      onPress={handleBack}>
      <View style={styles.container}>
        <EmailTextInput
          value={email}
          onChangeText={setEmail}
          onFocus={handleEmailFocus}
          onBlur={handleEmailBlur}
          style={emailError && styles.error}
        />
        <Label error={emailError} />
        <Button title={strings.sendCode} onPress={handleSendCode} />
      </View>
    </BackGround>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: width(24),
    marginVertical: height(24),
  },
  error: {
    borderColor: colors.error,
  },
  flex: {
    flex: 1,
  },
});

export default ForgotPassword;
