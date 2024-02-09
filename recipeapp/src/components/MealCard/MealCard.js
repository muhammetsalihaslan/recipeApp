import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import styles from './MealCard.style';

const MealCard = ({meal, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <ImageBackground source={{uri: meal.strMealThumb}} style={styles.image}>
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.text}>
            {meal.strMeal}
          </Text>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealCard;
