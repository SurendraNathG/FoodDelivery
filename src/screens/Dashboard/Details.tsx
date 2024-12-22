import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import fonts from '../../assets/fonts';
import {BlackBack, Cart, MinusIcon, PlusIcon} from '../../assets/icons';
import Button from '../../components/Button';
import {showToast} from '../../global/Toast';
import colors from '../../global/colors';
import {getFontSize, height, width} from '../../global/helper';
import screenNames from '../../global/screenNames';
import strings from '../../global/strings';
import useNavigation from '../../global/useNavigation';
import {useAppDispatch, useAppSelector} from '../../store';
import {addCardItems} from '../../store/slice/user.slice';

interface ICuisineItems {
  data?: any;
  index?: any;
}
function Details() {
  const route = useRoute();
  const navigation = useNavigation();
  const {data} = (route?.params as ICuisineItems) || {};
  const {name, price, image, description} = data;
  const [count, setCount] = useState<any>(1);
  const [amount, setAmount] = useState(price);
  const {cartItems} = useAppSelector(state => state.user) || [];
  const dispatch = useAppDispatch();
  function handleBack() {
    navigation.navigate(screenNames.home);
  }

  function handleIncrement() {
    if (count < 100) setCount(count + 1);
  }
  function handleDecrement() {
    if (count > 1) setCount(count - 1);
  }

  useEffect(() => {
    setAmount(count * price);
  }, [count]);

  function handleAdd() {
    showToast({
      bottom: 187,
      message: 'Item added to the cart successfully',
      type: 'success',
    });
    const item = {...data, count: count};
    dispatch(addCardItems(item));
  }

  function handleCart() {
    setCount(1);
    navigation.navigate(screenNames.cartItem);
  }

  return (
    <>
      <View>
        <FastImage source={{uri: image}} style={styles.imageWrapper} />
        <View style={styles.header}>
          <TouchableOpacity activeOpacity={0.7} onPress={handleBack}>
            <BlackBack />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCart}>
            <View style={styles.overlayCount}>
              <Text style={styles.itemCount}>{cartItems?.length}</Text>
            </View>
            <Cart />
          </TouchableOpacity>
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.innerText}>{description}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.amountWrapper}>
          <Text style={styles.priceText}>{`$${amount?.toFixed(2)}`}</Text>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity activeOpacity={0.7} onPress={handleDecrement}>
              <MinusIcon />
            </TouchableOpacity>
            <Text style={styles.countText}>{count}</Text>
            <TouchableOpacity activeOpacity={0.7} onPress={handleIncrement}>
              <PlusIcon />
            </TouchableOpacity>
          </View>
        </View>
        <Button title={strings.addToCart} onPress={handleAdd} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    height: height(300),
    width: '100%',
    borderRadius: getFontSize(15),
  },
  header: {
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: height(20),
    left: width(20),
    right: width(20),
  },
  amountWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: height(27),
    marginBottom: height(32),
  },
  overlayCount: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.orange,
    zIndex: 1,
    paddingHorizontal: getFontSize(10),
    paddingVertical: getFontSize(5),
    borderRadius: getFontSize(30),
    left: getFontSize(25),
    top: getFontSize(-10),
  },
  countText: {
    fontSize: getFontSize(20),
    color: colors.white,
    fontFamily: fonts.bold,
  },
  priceText: {
    fontSize: getFontSize(28),
    color: colors.restaurantName,
    fontFamily: fonts.regular,
    lineHeight: getFontSize(33.69),
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.black,
    borderRadius: getFontSize(50),
    paddingHorizontal: width(20),
    paddingVertical: height(15),
    borderWidth: getFontSize(1),
    borderColor: colors.black,
    width: width(160),
  },
  itemCount: {
    fontSize: getFontSize(14),
    color: colors.white,
    fontFamily: fonts.regular,
  },
  bottomContainer: {
    backgroundColor: colors.textInputBackground,
    height: height(200),
    width: '100%',
    bottom: 0,
    position: 'absolute',
    borderTopStartRadius: getFontSize(20),
    borderTopEndRadius: getFontSize(20),
    paddingHorizontal: width(20),
  },
  middleContainer: {
    marginHorizontal: width(10),
    marginTop: height(20),
  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 4,
  },
  name: {
    fontSize: getFontSize(20),
    color: colors.restaurantName,
    fontFamily: fonts.regular,
    marginTop: getFontSize(24),
    marginBottom: getFontSize(6),
    lineHeight: getFontSize(24.06),
  },
  innerText: {
    fontSize: getFontSize(14),
    color: colors.placeHolderColor,
    fontFamily: fonts.regular,
    lineHeight: getFontSize(16.84),
  },
});

export default Details;
