
import useAxios from '../../utils/useAxios';


export default function Index() {

  const { data, error } = useAxios('/api/users');


  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>


  return (
    <>
      <div>SWR</div><br/>

      <div>{data.date}</div>

      <br/>

      <div>Atividade: {data.dados.activity}</div>
      <div>Tipo: {data.dados.type}</div>
      <div>Participantes: {data.dados.participants}</div>
      <div>Acessibilidade: {data.dados.accessibility}</div>

      
   </>
  )
  
}