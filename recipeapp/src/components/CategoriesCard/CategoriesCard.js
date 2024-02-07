import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './CategoriesCard.style';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const CategoriesCard = ({category, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: category.strCategoryThumb}} />
        <Text style={styles.text}>{category.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoriesCard;
