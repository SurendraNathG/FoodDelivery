import {StyleSheet, Text, View} from 'react-native';

import Toast, {ToastConfig} from 'react-native-toast-message';
import fonts from '../assets/fonts';
import {getFontSize, height, width} from './helper';

type IToastMessage = Readonly<{
  message: string;
  type: 'success' | 'warning' | 'error';
  bottom?: number;
  duration?: number;
}>;

export const toastConfig: ToastConfig = {
  customToast: ({props, text1, text1Style}) => (
    <View style={[styles.wrapper, {backgroundColor: props.backgroundColor}]}>
      <Text style={[styles.text, text1Style]}>{text1}</Text>
    </View>
  ),
};

const colors = {success: 'green', error: '#EE8787', warning: 'yellow'};
const textColors = {success: 'white', error: 'black', warning: 'black'};

export function showToast({message, type, bottom, duration}: IToastMessage) {
  Toast.show({
    bottomOffset: bottom ?? 50,
    props: {backgroundColor: colors[type]},
    position: 'bottom',
    swipeable: true,
    text1: message,
    autoHide: true,
    text1Style: {color: textColors[type]},
    type: 'customToast',
    visibilityTime: duration ? duration : 2000,
  });
}

const styles = StyleSheet.create({
  wrapper: {
    maxWidth: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width(28),
    paddingVertical: height(10),
    borderRadius: getFontSize(12),
    alignSelf: 'center',
  },
  text: {
    fontFamily: fonts.bold,
    fontSize: getFontSize(14),
  },
});
