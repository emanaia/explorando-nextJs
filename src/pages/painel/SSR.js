
import getUsers from '../../utils/getUsers';

function SSR({ dados }) {

  console.log(dados.data)

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

  return { 
    props: { dados: response },
  }
}

export default SSR