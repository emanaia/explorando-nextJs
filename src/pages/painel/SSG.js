import { useState } from "react";
import getUsers from '../api/getUsers';

function SSR({ users }) {

  return (
    <>
      <div>SSG</div>

      <div>{users.date}</div>

      
      {users && users.data.map((item, index) => (
        <p key={index}>{item.email}</p>
      ))}  

    </>
  )
}

export async function getStaticProps() {
  
  const response = await getUsers();

  return { 
    props: { users: response },
    revalidate:10
  }
}

export default SSR