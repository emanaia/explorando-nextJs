
import getUsers from '../../utils/getUsers';
import {useRouter} from 'next/router';

function SSR({ dados }) {

  const router = useRouter();
  // console.log(router)  

  return (
    <>
      <div>SSR</div>
      
      <br/>

      <div>{dados.date}</div>

      <br/>

      <div>Atividade: {dados.data.activity}</div>
      <div>Tipo: {dados.data.type}</div>
      <div>Participantes: {dados.data.participants}</div>
      <div>Acessibilidade: {dados.data.accessibility}</div>


      {/* {dados.data.map((item, index) => (
          <div key={index}>

          </div>
      ))}  */}

    </>
  )
}

export async function getServerSideProps() {
  
  const response = await getUsers();

  return { props: { dados: response }}  
}

export default SSR