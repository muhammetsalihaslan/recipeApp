import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import useFetch from '../../hooks/useFetch';

const Details = ({route}) => {
  const id = route.params.id;
  const {data, loading, error} = useFetch(Config.API_URL_DTL + `${id}`);
  return (
    <View>
      <Image />
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <TouchableOpacity>
        <Text></Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;
