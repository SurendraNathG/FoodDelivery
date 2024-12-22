import React from 'react';
import {I18nManager, StyleSheet, View} from 'react-native';
import {CircleSnail} from 'react-native-progress';
import colors from '../global/colors';
import {useAppSelector} from '../store';

function Spinner() {
  const {spinners} = useAppSelector(state => state.user);

  if (spinners < 1) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <CircleSnail
        size={49}
        thickness={1}
        direction={I18nManager.isRTL ? 'counter-clockwise' : 'clockwise'}
        color={colors.white}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.transparent,
  },
  lottie: {
    flex: 1,
  },
});

export default Spinner;
