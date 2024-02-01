import React from 'react';
import {FlatList, Text, View} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import styles from '../Categories/Categories.style';
import CategoriesCard from '../../components/CategoriesCard/CategoriesCard';

const Categories = () => {
  const {data} = useFetch(Config.API_URL);

  const renderCategories = ({item}) => <CategoriesCard category={item} />;

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderCategories} />
    </View>
  );
};

export default Categories;
