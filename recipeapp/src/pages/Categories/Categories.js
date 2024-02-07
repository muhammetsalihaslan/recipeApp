import React from 'react';
import {FlatList, Text, View} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import styles from './Categories.style';
import CategoriesCard from '../../components/CategoriesCard';
import Error from '../../components/Error';
import Loading from '../../components/Loading/Loading';

const Categories = ({navigation}) => {
  const {data, error, loading} = useFetch(Config.API_URL);

  const handleMealSelect = category => {
    navigation.navigate('MealPage', {category});
  };

  const renderCategories = ({item}) => (
    <CategoriesCard
      category={item}
      onSelect={() => handleMealSelect(item.strCategory)}
    />
  );

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={data.categories} renderItem={renderCategories} />
    </View>
  );
};

export default Categories;
