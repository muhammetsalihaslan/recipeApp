import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './CategoriesCard.style';

const CategoriesCard = ({category}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: category.strCategoryThumb}} />
      <Text style={styles.text}>{category.strCategory}</Text>
      <Text style={styles.text}>merhaba</Text>
    </View>
  );
};

export default CategoriesCard;
