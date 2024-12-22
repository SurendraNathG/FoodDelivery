import React, {useState} from 'react';
import {Keyboard, ScrollView, StyleSheet, View} from 'react-native';
import Button from '../../components/Button';
import EmailTextInput from '../../components/EmailTextInput';
import Label from '../../components/Label';
import NameTextInput from '../../components/NameTextInput';
import PasswordTextInput from '../../components/Password';
import {showToast} from '../../global/Toast';
import colors from '../../global/colors';
import {height, width} from '../../global/helper';
import screenNames from '../../global/screenNames';
import strings from '../../global/strings';
import useNavigation from '../../global/useNavigation';
import {
  isEmailValid,
  isPasswordValid,
  isUsernameValid,
  validateConfirmPassword,
  validateEmail,
  validateName,
  validatePassword,
} from '../../global/utilities';
import {useAppDispatch} from '../../store';
import {setUserData} from '../../store/slice/user.slice';
import BackGround from '../Login/BackGround';

const CreateAccount = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [retypeError, setRetypeError] = useState<string | null>('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState<string | null>('');
  const [passwordError, setPasswordError] = useState<string | null>('');
  const [emailError, setEmailError] = useState<string | null>('');
  const dispatch = useAppDispatch();

  function handleEmailBlur() {
    setEmailError(validateEmail(email));
  }
  function handleEmailFocus() {
    setEmailError('');
  }

  function handleNameBlur() {
    setNameError(validateName(name));
  }
  function handleNameFocus() {
    setNameError('');
  }
  function handlePasswordBlur() {
    setPasswordError(validatePassword(password));
  }
  function handlePasswordFocus() {
    setPasswordError('');
    setRetypeError('');
  }

  function handlePasswordRetypeBlur() {
    setRetypeError(validateConfirmPassword(password, retypePassword));
  }
  function handlePasswordRetypeFocus() {
    setRetypeError('');
  }
  function handleSign() {
    Keyboard.dismiss();
    if (
      !isEmailValid(email) ||
      !isPasswordValid(password) ||
      !isPasswordValid(retypePassword) ||
      !isUsernameValid(name)||
       password!==retypePassword
    ) {
      setEmailError(validateEmail(email));
      setPasswordError(validatePassword(password));
      setNameError(validateName(name));
      setRetypeError(validateConfirmPassword(password, retypePassword));
    } else if (
      isEmailValid(email) &&
      isPasswordValid(password) &&
      isPasswordValid(retypePassword) &&
      isUsernameValid(name)&&
      password===retypePassword
    ) {
      showToast({
        bottom: 187,
        message: 'Account created successfully',
        type: 'success',
      });
      dispatch(
        setUserData({
          name: name,
          email: email,
          password: password,
        }),
      );
      setTimeout(() => {
        navigation.navigate(screenNames.login);
      }, 2000);
    }
  }
  function handleBack() {
    navigation.goBack();
  }

  return (
    <BackGround
      title={strings.signUp}
      description={strings.pleaseSignUpStarted}
      back={true}
      onPress={handleBack}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <NameTextInput
            value={name}
            onChangeText={setName}
            onFocus={handleNameFocus}
            onBlur={handleNameBlur}
            style={nameError && styles.error}
          />
          <Label error={nameError} />
          <EmailTextInput
            value={email}
            onChangeText={setEmail}
            onFocus={handleEmailFocus}
            onBlur={handleEmailBlur}
            wrapperStyle={styles.emailTop}
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
          <PasswordTextInput
            value={retypePassword}
            onChangeText={setRetypePassword}
            onFocus={handlePasswordRetypeFocus}
            label={strings.reTypePassword}
            onBlur={handlePasswordRetypeBlur}
            style={retypeError && styles.error}
          />
          <Label error={retypeError} />
          <Button title={strings.signUp} onPress={handleSign} />
        </View>
      </ScrollView>
    </BackGround>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: width(24),
    marginVertical: height(24),
  },
  emailTop: {
    marginTop: height(2),
  },
  error: {
    borderColor: colors.error,
  },
  flex: {
    flex: 1,
  },
});

export default CreateAccount;
