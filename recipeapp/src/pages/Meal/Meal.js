import React from 'react';
import {FlatList, Text, View} from 'react-native';
import MealCard from '../../components/MealCard/MealCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Config from 'react-native-config';
import styles from './Meal.style';

const Meal = ({route}) => {
  const categories = route.params.category;
  const {data, loading, error} = useFetch(
    Config.API_URL_MEAL + `${categories}`,
  );
  const renderMeal = ({item}) => <MealCard meal={item} />;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderMeal} />
    </View>
  );
};

export default Meal;
