import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import fonts from '../assets/fonts';
import {Clock, Delivery, Star} from '../assets/icons';
import colors from '../global/colors';
import {getFontSize, height, width} from '../global/helper';
import strings from '../global/strings';

interface IRestaurant {
  data: {
    name?: string;
    rating?: number;
    cuisines?: [];
    deliveryTime?: number;
    image?: string;
    description?: string;
    cuisineItems: ICuisineItems;
  };
  index: number;
  isItemView?: boolean;
  onPress?: any;
}

interface ICuisineItems {
  cuisineItems: {
    type: string;
    items: {
      name?: string;
      price?: number;
      description?: string;
      image?: string;
    };
  };
}
function Restaurant({data, index, isItemView, onPress}: IRestaurant) {
  const {name, rating, cuisines, deliveryTime, image, description} = data;
  return (
    <TouchableOpacity
      activeOpacity={isItemView ? 1 : 0.7}
      style={styles.container}
      key={index}
      onPress={onPress}>
      <FastImage source={{uri: image}} style={styles.imageWrapper} />
      <Text style={styles.name}>{name}</Text>
      {isItemView ? (
        <Text style={styles.innerText}>{description}</Text>
      ) : (
        <View style={styles.innerItemWrapper}>
          {cuisines?.map((item: any, index: number) => {
            const appendText =
              index !== cuisines?.length - 1 ? item + ' - ' : item + '.';
            return <Text style={styles.innerText}>{appendText}</Text>;
          })}
        </View>
      )}
      <View style={styles.bottomContainer}>
        <View style={styles.itemWrapper}>
          <Star />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
        <View style={styles.itemWrapper}>
          <Delivery />
          <Text style={styles.time}>{strings.free}</Text>
        </View>
        <View style={styles.itemWrapper}>
          <Clock />
          <Text style={styles.time}>{deliveryTime}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: width(1),
    marginVertical: height(24),
  },
  imageWrapper: {
    height: height(207),
    width: '100%',
    borderRadius: getFontSize(15),
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: height(10),
  },
  ratingText: {
    fontSize: getFontSize(16),
    color: colors.restaurantName,
    fontFamily: fonts.bold,
    lineHeight: getFontSize(19.25),
  },
  time: {
    fontSize: getFontSize(14),
    color: colors.restaurantName,
    fontFamily: fonts.regular,
    lineHeight: getFontSize(16.25),
  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 4,
  },
  innerItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
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

export default Restaurant;
