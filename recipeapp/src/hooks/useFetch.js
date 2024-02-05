import axios from 'axios';
import {useEffect, useState} from 'react';

const useFetch = url => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(url);
      setData(responseData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return data;
};

export default useFetch;
