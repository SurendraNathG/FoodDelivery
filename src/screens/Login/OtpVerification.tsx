import React, {useEffect, useRef, useState} from 'react';
import {
  BackHandler,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import fonts from '../../assets/fonts';
import Button from '../../components/Button';
import Label from '../../components/Label';
import NumberInput from '../../components/NumberInput';
import {showToast} from '../../global/Toast';
import colors from '../../global/colors';
import {getFontSize, height, width} from '../../global/helper';
import screenNames from '../../global/screenNames';
import strings from '../../global/strings';
import useNavigation from '../../global/useNavigation';
import {isNumber} from '../../global/utilities';
import {useAppSelector} from '../../store';
import BackGround from './BackGround';

const OtpVerification = () => {
  const navigation = useNavigation();
  const [one, setOne] = useState<any>();
  const [two, setTwo] = useState<any>();
  const [three, setThree] = useState<any>();
  const [four, setFour] = useState<any>();
  const [error, setError] = useState<boolean>(false);
  const [otpError, setOtpError] = useState<string | null>('');
  const {userData} = useAppSelector(state => state.user);
  let oneRef = useRef<TextInput>(null);
  let twoRef = useRef<TextInput>(null);
  let threeRef = useRef<TextInput>(null);
  let fourthRef = useRef<TextInput>(null);
  const [invalidCount, setInValidCount] = useState(0);
  let otp = one + two + three + four;
  const [timer, setTimer] = useState(60);

  function handleVerifyCode() {
    if (otp != '1234') {
      setInValidCount(prev => prev + 1);
      setError(true);
      setOtpError('Invalid Otp');
    } else if (otp === '1234') {
      showToast({
        bottom: 187,
        message: `Welcome back ${userData?.name}`,
        type: 'success',
      });
      setTimeout(() => {
        navigation.navigate(screenNames.home);
      }, 2000);
    }
  }

  useEffect(() => {
    const backAction = () => {
      navigation.navigate(screenNames.login);
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, [navigation]);

  function handleNumberCheck(value: number, setValue: any, nextRef: any) {
    if (isNumber(value)) {
      setValue(value);
      if (value) {
        nextRef?.current?.focus();
      }
    }
  }
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
        setOtpError('');
        setOne('');
        setTwo('');
        setThree('');
        setFour('');
        oneRef.current?.focus();
      }, 2000);
    }
  }, [error]);

  useEffect(() => {
    setTimeout(() => {
      if (timer > 1) {
        setTimer(prev => prev - 1);
      } else if (timer === 1) {
        setTimer(0);
      }
    }, 1000);
  }, [timer]);

  function handleResend() {
    setTimer(60);
  }
  function handleBack() {
    navigation.navigate(screenNames.login);
  }

  useEffect(() => {
    if (invalidCount >= 7) {
      showToast({
        bottom: 187,
        message: 'Entered Invalid otp more than 7 times, try after some time.',
        type: 'warning',
        duration: 3000,
      });
    }
  }, [invalidCount]);

  return (
    <BackGround
      title={strings.Verification}
      description={strings.weSentEmail}
      back={true}
      onPress={handleBack}
      email={userData?.email}>
      <View style={styles.container}>
        <View style={styles.topWrapper}>
          <Text style={styles.code}>{strings.code}</Text>
          <View style={styles.topWrapper}>
            <TouchableOpacity
              activeOpacity={0.7}
              disabled={timer > 0}
              onPress={handleResend}>
              <Text style={styles.resend}>{strings.resend}</Text>
            </TouchableOpacity>
            <Text style={styles.timer}>{` in.${timer}sec`}</Text>
          </View>
        </View>
        <View style={styles.numberWrapper}>
          <NumberInput
            ref={oneRef}
            value={one}
            style={error && styles.error}
            onChangeText={(text: any) => {
              handleNumberCheck(text, setOne, twoRef);
            }}
          />
          <NumberInput
            ref={twoRef}
            value={two}
            style={error && styles.error}
            onChangeText={(text: any) => {
              handleNumberCheck(text, setTwo, threeRef);
            }}
          />
          <NumberInput
            ref={threeRef}
            value={three}
            style={error && styles.error}
            onChangeText={(text: any) => {
              handleNumberCheck(text, setThree, fourthRef);
            }}
          />
          <NumberInput
            ref={fourthRef}
            value={four}
            style={error && styles.error}
            onChangeText={(text: any) => {
              handleNumberCheck(text, setFour, fourthRef);
            }}
          />
        </View>
        <Label error={otpError} />

        <Button
          title={strings.verify}
          onPress={handleVerifyCode}
          style={styles.buttonWrapper}
        />
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
  topWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width(10),
  },
  buttonWrapper: {
    marginTop: height(10),
  },
  timer: {
    fontFamily: fonts.regular,
    fontSize: getFontSize(14),
    lineHeight: getFontSize(16.84),
    textAlign: 'center',
    color: colors.black,
  },
  code: {
    fontFamily: fonts.regular,
    fontSize: getFontSize(13),
    lineHeight: getFontSize(15.64),
    textAlign: 'center',
    color: colors.black,
    textTransform: 'uppercase',
  },
  resend: {
    fontFamily: fonts.bold,
    fontSize: getFontSize(14),
    lineHeight: getFontSize(16.84),
    textAlign: 'center',
    color: colors.black,
    textDecorationLine: 'underline',
    marginRight: width(2),
  },
  numberWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: height(4),
  },
  flex: {
    flex: 1,
  },
});

export default OtpVerification;
