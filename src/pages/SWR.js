

import { useState } from 'react';
import useSWR from 'swr';

export default function Index() {

  const [state, setState] = useState([]); 

  const url = 'http://localhost:3000/api/people';

  const { data, error } = useSWR(url, async url => {
    const response = await fetch(url);
    const dados = await response.json();
    setState(dados.date);  

    return { data, error };
  })

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  // return <div>{data.date}</div>

  return (
    <>

    {state.map((item, index) => (
      <p key={index}>{item.email}</p>
    ))}   

    {/* <div>SWR</div> */}

   </>
  )
  
}