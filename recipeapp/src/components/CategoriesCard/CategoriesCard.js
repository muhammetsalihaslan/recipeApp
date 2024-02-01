import React from 'react';
import {Image, Text, View} from 'react-native';

const CategoriesCard = ({category}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: category.image}} />
      <Text style={styles.text}>{category.strCategory}</Text>
    </View>
  );
};

export default CategoriesCard;
