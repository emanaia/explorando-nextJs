import { useState } from "react";
import wait from '../api/wait';

function SSR({ teste }) {


  return (
    <>
    <div>SSR</div>
    <br/>
    <div>{teste.ip} - {teste.country}</div>

    </>
  )
}

export async function getServerSideProps() {
  
  // await fetch('http://localhost:3000/api/wait');

  const response = await fetch('https://api.myip.com');
  const data = await response.json();  
  
  return { 
    props: { teste: data },
  }
}

export default SSR