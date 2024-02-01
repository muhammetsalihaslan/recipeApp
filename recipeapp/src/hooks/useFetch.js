import axios from 'axios';
import {useState} from 'react';

const useFetch = url => {
  const [data, setData] = useState([]);

  useFetch(() => {
    const fetchData = async () => {
      try {
        const {data: responseData} = await axios.get(url);
        setData(responseData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [url]);

  return {data};
};

export default useFetch;
