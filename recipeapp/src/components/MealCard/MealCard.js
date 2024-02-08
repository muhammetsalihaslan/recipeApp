import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import styles from './MealCard.style';

const MealCard = ({meal}) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Image source={{uri: meal.strMealThumb}} style={styles.image} />
        <Text style={styles.text}>{meal.strMeal}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealCard;
