import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './DetailsCard.style';

const DetailsCard = ({detail}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: detail.strMealThumb}} />
      <View>
        <Text style={styles.text1}>{detail.strMeal}</Text>
        <Text style={styles.text2}>{detail.strArea}</Text>
        <View style={styles.hr} />
        <Text style={styles.text3}>{detail.strInstructions}</Text>
      </View>
      <TouchableOpacity style={styles.touchable}>
        <Text>Watch on Youtube</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsCard;
