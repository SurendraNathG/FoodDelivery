import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import fonts from '../../assets/fonts';
import {BlackBack} from '../../assets/icons';
import Restaurant from '../../components/Restaurant';
import colors from '../../global/colors';
import {getFontSize, height, width} from '../../global/helper';
import strings from '../../global/strings';
import useNavigation from '../../global/useNavigation';
import Cuisine from './Cuisine';

const RestaurantInfo = () => {
  const route = useRoute();
  const {item, index} = (route?.params as any) || [];
  const navigation = useNavigation();
  const [selected, setSelected] = useState<any>(
    item?.cuisineItems[0]?.items || [],
  );
  const [activeTab, setActiveTab] = useState(
    item?.cuisineItems?.[0]?.type || [],
  );
  function handlePress() {
    navigation.goBack();
  }

  const handleRender = ({item, index}: {item: any; index: number}) => {
    return <Cuisine items={item} index={index} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <BlackBack fill={colors.whiteBG} onPress={handlePress} />
        <Text style={styles.header}>{strings.restaurantView}</Text>
      </View>
      <View style={styles.wrapper}>
        <Restaurant data={item} index={index} isItemView={true} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.cuisineWrapper}>
            {item?.cuisineItems?.map((item: any, index: number) => {
              function handleSelect() {
                setSelected(item?.items);
                setActiveTab(item?.type);
              }
              const activeColor =
                activeTab === item?.type ? colors.orange : colors.white;
              const activeTextColor =
                activeTab === item?.type ? colors.white : colors.black;
              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.buttonContainer,
                    {backgroundColor: activeColor},
                  ]}
                  onPress={handleSelect}>
                  <Text style={[styles.buttonText, {color: activeTextColor}]}>
                    {item?.type}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <FlatList
          data={selected}
          renderItem={handleRender}
          numColumns={2}
          keyExtractor={(item: any) => item?.id}
          scrollEnabled={false}
        />
      </ScrollView>
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
  buttonText: {
    fontFamily: fonts.regular,
    fontSize: getFontSize(14),
    lineHeight: getFontSize(19.25),
    color: colors.black,
    textAlign: 'center',
  },
  buttonContainer: {
    paddingHorizontal: width(16),
    paddingVertical: height(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: getFontSize(24),
    borderWidth: getFontSize(1),
    borderColor: colors.border,
    backgroundColor: '',
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: height(20),
    gap: 20,
    marginStart: width(30),
  },
  cuisineWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20,
    height: height(60),
  },
  header: {
    fontFamily: fonts.regular,
    fontSize: getFontSize(20),
    lineHeight: getFontSize(24.06),
    color: colors.black,
    textAlign: 'center',
  },
});

export default RestaurantInfo;
