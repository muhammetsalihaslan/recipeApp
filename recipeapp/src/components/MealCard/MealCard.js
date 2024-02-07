import React from 'react';
import {Image, Text} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const MealCard = () => {
  return (
    <TouchableWithoutFeedback>
      <View>
        <Image />
        <Text>Merhaba</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealCard;
