import React, {useEffect} from 'react';
import {
  BackHandler,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {restaurants} from '../../SampleData/RestaurantsData';
import fonts from '../../assets/fonts';
import {Cart} from '../../assets/icons';
import Restaurant from '../../components/Restaurant';
import colors from '../../global/colors';
import {getFontSize, height, width} from '../../global/helper';
import screenNames from '../../global/screenNames';
import strings from '../../global/strings';
import useNavigation from '../../global/useNavigation';
import {useAppSelector} from '../../store';

const Home = () => {
  const navigation = useNavigation();
  const {cartItems} = useAppSelector(state => state.user) || [];
  const renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <Restaurant
        data={item}
        index={index}
        onPress={() =>
          navigation.navigate(screenNames.restaurantInfo, {item, index})
        }
      />
    );
  };
  function handleCart() {
    navigation.navigate(screenNames.cartItem);
  }

  useEffect(() => {
    const backAction = () => {
      navigation.navigate(screenNames.login);
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.topWrapper}>
          <Text style={styles.header}>{strings.openRestaurants}</Text>
          <TouchableOpacity onPress={handleCart}>
            <View style={styles.overlayCount}>
              <Text style={styles.itemCount}>{cartItems?.length}</Text>
            </View>
            <Cart />
          </TouchableOpacity>
        </View>
        <FlatList
          data={restaurants}
          renderItem={renderItem}
          keyExtractor={item => item?.id}
          style={styles.bottomWrapper}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    marginHorizontal: width(24),
  },
  header: {
    fontFamily: fonts.bold,
    fontSize: getFontSize(20),
    lineHeight: getFontSize(24.06),
    color: colors.black,
    marginTop: height(20),
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
  topWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width(20),
    paddingVertical: height(15),
  },
  itemCount: {
    fontSize: getFontSize(14),
    color: colors.white,
    fontFamily: fonts.regular,
  },
  bottomWrapper: {
    marginBottom: '34%',
  },
});

export default Home;
