import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React, {memo} from 'react';
import {StatusBar} from 'react-native';
import colors from '../global/colors';
import screenNames from '../global/screenNames';
import CartItem from '../screens/Dashboard/CartItem';
import Checkout from '../screens/Dashboard/Checkout';
import Details from '../screens/Dashboard/Details';
import Home from '../screens/Dashboard/Home';
import RestaurantInfo from '../screens/Dashboard/RestaurantInfo';
import Login from '../screens/Login';
import ForgotPassword from '../screens/Login/ForgotPassword';
import OtpVerification from '../screens/Login/OtpVerification';
import CreateAccount from '../screens/Signup/CreateAccount';

const Stack = createNativeStackNavigator();
const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  autoHideHomeIndicator: true,
  navigationBarHidden: true,
  freezeOnBlur: true,
  animation: 'none',
};

function UserStack() {
  return (
    <NavigationContainer>
      <StatusBar
        animated
        backgroundColor={colors.white}
        barStyle="dark-content"
      />
      <Stack.Navigator
        initialRouteName={screenNames.login}
        screenOptions={screenOptions}>
        <Stack.Screen name={screenNames.login} component={Login} />
        <Stack.Screen
          name={screenNames.forgotPassword}
          component={ForgotPassword}
        />
        <Stack.Screen
          name={screenNames.createAccount}
          component={CreateAccount}
        />
        <Stack.Screen
          name={screenNames.otpVerification}
          component={OtpVerification}
        />
        <Stack.Screen name={screenNames.home} component={Home} />
        <Stack.Screen
          name={screenNames.restaurantInfo}
          component={RestaurantInfo}
        />
        <Stack.Screen name={screenNames.details} component={Details} />
        <Stack.Screen name={screenNames.cartItem} component={CartItem} />
        <Stack.Screen name={screenNames.checkout} component={Checkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default memo(UserStack);
