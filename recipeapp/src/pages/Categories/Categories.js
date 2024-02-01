import React from 'react';
import {FlatList, Text, View} from 'react-native';

const Categories = () => {
  const renderCategories = ({item}) => {};

  return (
    <View>
      <FlatList data={data} renderItem={renderCategories} />
    </View>
  );
};

export default Categories;
