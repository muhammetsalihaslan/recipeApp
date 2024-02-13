import React from 'react';
import {Image, Linking, Text, TouchableOpacity, View} from 'react-native';
import styles from './DetailsCard.style';

const DetailsCard = ({detail}) => {
  const handlePress = () => {
    Linking.openURL(detail.strYoutube);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: detail.strMealThumb}} />
      <View>
        <Text style={styles.text1}>{detail.strMeal}</Text>
        <Text style={styles.text2}>{detail.strArea}</Text>
        <View style={styles.hr} />
        <Text style={styles.text3}>{detail.strInstructions}</Text>
      </View>
      <TouchableOpacity style={styles.touchable} onPress={handlePress}>
        <Text style={styles.text4}>Watch on Youtube</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsCard;
