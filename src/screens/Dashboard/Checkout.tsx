import React, {useEffect} from 'react';
import {BackHandler, StyleSheet, Text, View} from 'react-native';
import fonts from '../../assets/fonts';
import {PaymentSuccess} from '../../assets/icons';
import Button from '../../components/Button';
import colors from '../../global/colors';
import {getFontSize, height, width} from '../../global/helper';
import screenNames from '../../global/screenNames';
import strings from '../../global/strings';
import useNavigation from '../../global/useNavigation';
import {useAppDispatch} from '../../store';
import {setCartItems} from '../../store/slice/user.slice';

const Checkout = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  function handleDone() {
    dispatch(setCartItems([]));
    navigation.navigate(screenNames.home);
  }

  useEffect(() => {
    const backAction = () => {
      navigation.navigate(screenNames.home);
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, [navigation]);
  return (
    <View style={styles.flex}>
      <View style={styles.imageContainer}>
        <PaymentSuccess />
      </View>
      <Text style={styles.title}>{strings.congratulations}</Text>
      <Text style={styles.description}>{strings.youSuccessfully}</Text>
      <Button title="ok" onPress={handleDone} />
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: width(24),
  },
  imageContainer: {
    marginTop: height(200),
  },
  title: {
    marginTop: height(10),
    fontSize: getFontSize(28),
    color: colors.restaurantName,
    fontFamily: fonts.bold,
    lineHeight: getFontSize(33.69),
  },
  description: {
    marginTop: height(10),
    fontSize: getFontSize(14),
    color: colors.restaurantName,
    fontFamily: fonts.regular,
    lineHeight: getFontSize(19.69),
    marginBottom: height(20),
  },
});
export default Checkout;
