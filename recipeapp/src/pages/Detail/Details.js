import React from 'react';

import useFetch from '../../hooks/useFetch';
import {FlatList} from 'react-native';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import DetailsCard from '../../components/DetailsCard';

const Details = ({route}) => {
  const id = route.params.id;
  const {data, loading, error} = useFetch(Config.API_URL_DTL + `${id}`);

  const renderDetails = ({item}) => <DetailsCard detail={item} />;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return <FlatList data={data.meals} renderItem={renderDetails} />;
};

export default Details;
