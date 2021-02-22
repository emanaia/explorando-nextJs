
import Person from '../components/Person';
import useAxios from '../utils/useAxios';


export default function Index() {

  const { data, error } = useAxios('/api/people');  //useSWR

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return <div>{data.date}</div>
  
}