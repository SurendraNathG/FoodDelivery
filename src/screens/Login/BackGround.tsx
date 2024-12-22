import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BGIcon, BackIcon} from '../../assets/icons';
import colors from '../../global/colors';
import {getFontSize, height, width} from '../../global/helper';

import fonts from '../../assets/fonts';
import useNavigation from '../../global/useNavigation';

function BackGround({children, title, description, email, onPress, back}: any) {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.wrapper}>
        <BGIcon />
        {back && (
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.iconContainer}
            onPress={onPress}>
            <BackIcon height={getFontSize(45)} width={getFontSize(45)} />
          </TouchableOpacity>
        )}
        <View style={styles.topWrapper}>
          <Text style={styles.headerText}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>
      <View style={styles.overlapWrapper}>{children}</View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.darkBlack,
  },
  overlapWrapper: {
    position: 'absolute',
    height: '70%',
    bottom: 0,
    width: '100%',
    borderRadius: getFontSize(8),
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
    backgroundColor: colors.white,
  },
  headerText: {
    fontFamily: fonts.extraBold,
    fontSize: getFontSize(30),
    lineHeight: getFontSize(36.09),
    textAlign: 'center',
    color: colors.white,
  },
  iconContainer: {
    position: 'absolute',
    top: height(50),
    left: width(24),
  },
  topWrapper: {
    position: 'absolute',
    top: height(98),
    left: 0,
    right: 0,
  },
  description: {
    marginTop: height(3),
    fontFamily: fonts.regular,
    fontSize: getFontSize(16),
    lineHeight: getFontSize(26),
    textAlign: 'center',
    color: colors.lightWhite,
  },
  email: {
    fontFamily: fonts.bold,
    fontSize: getFontSize(16),
    lineHeight: getFontSize(23.62),
    textAlign: 'center',
    color: colors.white,
  },
});
export default BackGround;
