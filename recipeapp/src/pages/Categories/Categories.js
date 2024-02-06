import React from 'react';
import {FlatList, Text, View} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import styles from './Categories.style';
import CategoriesCard from '../../components/CategoriesCard';
import Error from '../../components/Error';

const Categories = () => {
  const {data, error} = useFetch(Config.API_URL);

  const renderCategories = ({item}) => <CategoriesCard category={item} />;

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={data.categories} renderItem={renderCategories} />
    </View>
  );
};

export default Categories;
