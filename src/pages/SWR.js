

import { useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';

export default function Index() {

  const [state, setState] = useState([]); 

  const url = '/api/people';

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
      <p key={item.id}>{item.email}</p>
    ))}   

    {/* <div>oi</div> */}

   </>
  )
  
}