
import useAxios from '../../utils/useAxios';


export default function Index() {

  const { data, error } = useAxios('/api/users');


  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>


  return (
    <>
      <div>SWR</div><br/>

      <div>{data.date}</div>

      {data.data.map((item, index) => (
        <p key={index}>{item.email}</p>
      ))}
      
   </>
  )
  
}