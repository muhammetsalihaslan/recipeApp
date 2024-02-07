import React from 'react';
import {FlatList, Text, View} from 'react-native';
import MealCard from '../../components/MealCard/MealCard';
import useFetch from '../../hooks/useFetch';

const Meal = ({category}) => {
  const {data, loading, error} = useFetch(`Config.API_URL_MEAL + ${category}`);
  const renderMeal = ({item}) => {
    <MealCard meal={item} />;
  };

  return (
    <View>
      <Text>Meal</Text>
      <FlatList data={data} renderItem={renderMeal} />
    </View>
  );
};

export default Meal;
