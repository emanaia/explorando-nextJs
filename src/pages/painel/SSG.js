import { useState } from "react";
import getUsers from '../../utils/getUsers';

function SSR({ dados }) {

  return (
    <>
      <div>SSG</div>

      <div>{dados.date}</div>

      <br/>

      <div>Atividade: {dados.data.activity}</div>
      <div>Tipo: {dados.data.type}</div>
      <div>Participantes: {dados.data.participants}</div>
      <div>Acessibilidade: {dados.data.accessibility}</div>
      
      {/* {users && users.data.map((item, index) => (
        <p key={index}>{item.email}</p>
      ))}   */}

    </>
  )
}

export async function getStaticProps() {
  
  const response = await getUsers();

  return { 
    props: { dados: response },
    revalidate:10
  }
}

export default SSR