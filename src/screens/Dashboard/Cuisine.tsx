import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import fonts from '../../assets/fonts';
import {AddIcon} from '../../assets/icons';
import colors from '../../global/colors';
import {getFontSize, height, width} from '../../global/helper';
import screenNames from '../../global/screenNames';
import useNavigation from '../../global/useNavigation';

interface ICuisineItems {
  items: {
    name?: string;
    price?: number;
    description?: string;
    image?: string;
  };
  index?: number;
}
function Cuisine({items, index}: ICuisineItems) {
  const navigation = useNavigation();
  const {name, price, image} = items;
  function handleItem() {
    navigation.navigate(screenNames.details, {data: items, index});
  }
  return (
    <>
      <View style={styles.container} key={index}>
        <View style={styles.bottomContainer}>
          <View style={styles.overlayWrapper}>
            <FastImage
              source={{uri: image}}
              style={styles.imageWrapper}
              resizeMode="stretch"
            />
          </View>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.itemWrapper}>
            <Text style={styles.price}>{`$${price}`}</Text>
            <TouchableOpacity onPress={handleItem} activeOpacity={0.7}>
              <AddIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: width(6),
    marginVertical: height(24),
    width: '48%',
  },
  imageWrapper: {
    height: '100%',
    width: '100%',
    paddingHorizontal: width(24),
    borderRadius: getFontSize(15),
  },
  overlayWrapper: {
    height: height(100),
    top: height(-20),
    right: 0,
  },
  bottomContainer: {
    marginTop: height(10),
    width: '100%',
    borderTopStartRadius: getFontSize(40),
    borderTopEndRadius: getFontSize(40),
    borderRadius: getFontSize(8),
    backgroundColor: colors.white,
    paddingHorizontal: width(10),
    position: 'relative',
    borderColor: colors.whiteBG,
    borderWidth: getFontSize(0.8),
    paddingBottom: height(8),
  },
  price: {
    fontSize: getFontSize(16),
    color: colors.restaurantName,
    fontFamily: fonts.bold,
    lineHeight: getFontSize(19.25),
  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: getFontSize(20),
    color: colors.restaurantName,
    fontFamily: fonts.regular,
    lineHeight: getFontSize(24.06),
  },
});

export default Cuisine;
