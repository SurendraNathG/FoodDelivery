/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './src/store';
import UserStack from './src/navigation/UserStack';
import Spinner from './src/components/Spinner';
import Toast from 'react-native-toast-message';
import {toastConfig} from './src/global/Toast';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={styles.app}>
      <Provider store={store}>
        <UserStack />
        <Toast config={toastConfig} />
        <Spinner />
      </Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({app: {flex: 1}});

export default App;
