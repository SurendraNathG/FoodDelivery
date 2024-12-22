import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import fonts from '../../assets/fonts';
import {BlackBack} from '../../assets/icons';
import Button from '../../components/Button';
import CartData from '../../components/CartData';
import colors from '../../global/colors';
import {getFontSize, height, width} from '../../global/helper';
import screenNames from '../../global/screenNames';
import strings from '../../global/strings';
import useNavigation from '../../global/useNavigation';
import {useAppSelector} from '../../store';

const CartItem = () => {
  const route = useRoute();
  const {cartItems} = useAppSelector(state => state.user) || [];
  const navigation = useNavigation();
  const [amount, setAmount] = useState(0);

  function handlePress() {
    navigation.goBack();
  }
  const handleRender = ({item}: {item: any}) => {
    return <CartData item={item} />;
  };

  useEffect(() => {
    const total = cartItems?.reduce((acc, cur) => {
      return acc + cur?.price * cur?.count;
    }, 0);
    setAmount(total);
  }, [cartItems]);

  function handleCheckout() {
    if (amount > 0) {
      navigation.navigate(screenNames.checkout);
    }
  }
  const renderEmptyList = () => {
    return (
      <View style={styles.emptyWrapper}>
        <Text style={styles.emptyText}>{strings.emptyList}</Text>
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <BlackBack fill={colors.whiteBG} onPress={handlePress} />
          <Text style={styles.header}>{strings.cart}</Text>
        </View>
        <FlatList
          data={cartItems}
          renderItem={handleRender}
          keyExtractor={(item: any) => item?.id}
          style={styles.listWrapper}
          ListEmptyComponent={renderEmptyList}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.amountWrapper}>
          <Text>{strings.totalAmount}</Text>
          <Text style={styles.priceText}>{`$${amount?.toFixed(2)}`}</Text>
        </View>
        <Button title={strings.checkout} onPress={handleCheckout} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cartBG,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: height(20),
    gap: 20,
    marginStart: width(30),
    marginBottom: height(30),
  },
  listWrapper: {
    marginBottom: height(200),
  },
  header: {
    fontFamily: fonts.regular,
    fontSize: getFontSize(20),
    lineHeight: getFontSize(24.06),
    color: colors.white,
    textAlign: 'center',
  },
  priceText: {
    fontSize: getFontSize(28),
    color: colors.restaurantName,
    fontFamily: fonts.regular,
    lineHeight: getFontSize(33.69),
  },
  amountWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: height(27),
    marginBottom: height(32),
  },
  emptyWrapper: {
    marginTop: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: getFontSize(28),
    color: colors.white,
    fontFamily: fonts.regular,
    lineHeight: getFontSize(33.69),
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
});

export default CartItem;
