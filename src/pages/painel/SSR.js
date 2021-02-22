
import getUsers from '../api/getUsers';

function SSR({ dados }) {

  return (
    <>
      <div>SSR</div>
      <br/>
      <div>{dados.date}</div>

      {dados.data.map((item, index) => (
          <p key={index}>{item.email}</p>
      ))} 

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