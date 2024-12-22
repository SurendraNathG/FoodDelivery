import React, {useState} from 'react';
import {Keyboard, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import fonts from '../../assets/fonts';
import {
  Apple,
  CheckFilled,
  CheckOutLine,
  FaceBook,
  Twitter,
} from '../../assets/icons';
import Button from '../../components/Button';
import EmailTextInput from '../../components/EmailTextInput';
import Label from '../../components/Label';
import PasswordTextInput from '../../components/Password';
import {showToast} from '../../global/Toast';
import colors from '../../global/colors';
import {getFontSize, height, width} from '../../global/helper';
import screenNames from '../../global/screenNames';
import strings from '../../global/strings';
import useNavigation from '../../global/useNavigation';
import {
  isEmailValid,
  isPasswordValid,
  validateEmail,
  validatePassword,
} from '../../global/utilities';
import {useAppDispatch, useAppSelector} from '../../store';
import {setIsSave} from '../../store/slice/user.slice';
import BackGround from './BackGround';

const Login = () => {
  const navigation = useNavigation();
  const [passwordError, setPasswordError] = useState<string | null>('');
  const [emailError, setEmailError] = useState<string | null>('');
  const {userData, isSave} = useAppSelector(state => state.user);
  const [check, setCheck] = useState(isSave);
  const [password, setPassword] = useState(isSave ? userData?.password : '');
  const [email, setEmail] = useState(isSave ? userData?.email : '');
  const dispatch = useAppDispatch();
  function handleEmailBlur() {
    setEmailError(validateEmail(email));
  }
  function handleEmailFocus() {
    setEmailError('');
  }
  function handlePasswordBlur() {
    setPasswordError(validatePassword(password));
  }
  function handlePasswordFocus() {
    setPasswordError('');
  }

  function clearError() {
    setEmailError('');
    setPasswordError('');
  }

  function handleLogin() {
    Keyboard.dismiss();
    if (!isEmailValid(email) || !isPasswordValid(password)) {
      setEmailError(validateEmail(email));
      setPasswordError(validatePassword(password));
    } else if (
      isEmailValid(email) &&
      isPasswordValid(password) &&
      email?.toLowerCase() !== userData?.email?.toLowerCase() &&
      password !== userData?.password
    ) {
      showToast({
        bottom: 187,
        message: 'Please enter valid credentials',
        type: 'error',
      });
    } else {
      showToast({
        bottom: 187,
        message: `Welcome ${userData?.name}`,
        type: 'success',
      });
      setTimeout(() => {
        setEmail('');
        setPassword('');
        navigation.navigate(screenNames.home);
      }, 2000);
    }
  }

  function handleSignUp() {
    clearError();
    navigation.navigate(screenNames.createAccount);
  }
  function handleForgotPassword() {
    clearError();
    navigation.navigate(screenNames.forgotPassword);
  }
  function handleCheck() {
    dispatch(setIsSave(!check));
    setCheck(!check);
  }
  return (
    <BackGround
      title={strings.logIn}
      description={strings.pleaseSign_inAccount}>
      <View style={styles.container}>
        <EmailTextInput
          value={email}
          onChangeText={setEmail}
          onFocus={handleEmailFocus}
          onBlur={handleEmailBlur}
          style={emailError && styles.error}
        />
        <Label error={emailError} />
        <PasswordTextInput
          value={password}
          onChangeText={setPassword}
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
          style={passwordError && styles.error}
        />
        <Label error={passwordError} />
        <View style={styles.forgotWrapper}>
          <View style={styles.checkWrapper}>
            {check ? (
              <TouchableOpacity onPress={handleCheck}>
                <CheckFilled />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handleCheck}>
                <CheckOutLine />
              </TouchableOpacity>
            )}
            <Text style={styles.rememberText}>{strings.rememberMe}</Text>
          </View>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.sign}>{strings.forgotPassword}</Text>
          </TouchableOpacity>
        </View>
        <Button title={strings.logIn} onPress={handleLogin} />
        <View>
          <View style={styles.signWrapper}>
            <View style={styles.rememberWrapper}>
              <Text style={styles.doAccount}>{strings.doHaveAccount}</Text>
            </View>
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={styles.sign}>{strings.signUp}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.socialContainer}>
            <Text style={styles.orText}>{strings.or}</Text>
            <View style={styles.bottomWrapper}>
              <FaceBook />
              <Twitter />
              <Apple />
            </View>
          </View>
        </View>
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
  signWrapper: {
    marginTop: height(29),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  checkWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 6,
  },
  bottomWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    marginTop: height(15),
  },
  socialContainer: {
    marginTop: height(27),
  },
  rememberWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
  },
  rememberText: {
    fontFamily: fonts.regular,
    fontSize: getFontSize(13),
    lineHeight: getFontSize(15.64),
    textAlign: 'center',
    color: colors.lightBlack,
  },
  orText: {
    fontFamily: fonts.regular,
    fontSize: getFontSize(16),
    lineHeight: getFontSize(19.825),
    textAlign: 'center',
    color: colors.lightGrey,
  },
  doAccount: {
    fontFamily: fonts.regular,
    fontSize: getFontSize(16),
    lineHeight: getFontSize(24),
    color: colors.lightGrey,
  },
  sign: {
    fontFamily: fonts.bold,
    fontSize: getFontSize(14),
    lineHeight: getFontSize(16.84),
    color: colors.orange,
  },
  forgotWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: height(19),
  },
  flex: {
    flex: 1,
  },
});

export default Login;
