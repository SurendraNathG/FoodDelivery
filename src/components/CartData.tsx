import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import fonts from '../assets/fonts';
import {MinusIcon, PlusIcon} from '../assets/icons';
import colors from '../global/colors';
import {getFontSize, height, width} from '../global/helper';
import {useAppDispatch} from '../store';
import {addCardItems} from '../store/slice/user.slice';

interface ICuisineItems {
  item: {
    name: string;
    price: number;
    description?: string;
    image: string;
    id?: string;
    count: number;
  };
}
function CartData({item}: ICuisineItems) {
  const dispatch = useAppDispatch();
  const {name, price, count, image, id} = item;
  const [innerCount, setInnerCount] = useState(count || 1);

  function handleAdd() {
    if (count < 100) {
      setInnerCount(prev => prev + 1);
      const innerItem = {...item, count: innerCount + 1};
      dispatch(addCardItems(innerItem));
    }
  }
  function handleSubtract() {
    setInnerCount(prev => prev - 1);
    const innerItem = {...item, count: innerCount - 1};
    dispatch(addCardItems(innerItem));
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <FastImage source={{uri: image}} style={styles.imageWrapper} />
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.rightWrapper}>
          <View>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.priceText}>{`$${(
              (price || 1) * (count || 1)
            )?.toFixed(2)}`}</Text>
          </View>
          <View style={styles.countWrapper}>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity activeOpacity={0.7} onPress={handleSubtract}>
                <MinusIcon />
              </TouchableOpacity>
              <Text style={styles.countText}>{innerCount}</Text>
              <TouchableOpacity activeOpacity={0.7} onPress={handleAdd}>
                <PlusIcon />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    height: height(150),
    width: '100%',
    borderRadius: getFontSize(15),
  },
  rightWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: height(150),
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: width(20),
    marginVertical: height(20),
  },
  countWrapper: {
    alignItems: 'flex-end',
    paddingRight: width(10),
  },
  imageContainer: {
    width: '30%',
  },
  countText: {
    fontSize: getFontSize(20),
    color: colors.white,
    fontFamily: fonts.bold,
  },
  priceText: {
    fontSize: getFontSize(28),
    color: colors.white,
    fontFamily: fonts.regular,
    lineHeight: getFontSize(33.69),
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width(20),
    paddingVertical: height(15),
    borderColor: colors.white,
    width: width(160),
  },
  middleContainer: {
    justifyContent: 'flex-start',
    width: '70%',
    marginLeft: width(20),
  },
  nameText: {
    fontSize: getFontSize(20),
    color: colors.white,
    fontFamily: fonts.regular,
    marginBottom: getFontSize(6),
    lineHeight: getFontSize(24.06),
  },
});

export default CartData;
