import useSWR from 'swr';
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.BASE_URL
})

export default function useAxios(url) {

  const { data, error, mutate } = useSWR(url, async url => {

    const response = await api.get(url);
    return response.data;
    
  },
  { 
    revalidateOnReconnect: true,
    // refreshInterval: 10000
  }
  )


  return { data, error, mutate }

}