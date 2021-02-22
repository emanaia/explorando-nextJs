
export default async function handler(req, res) {

  // await new Promise(resolve => setTimeout(resolve, 3000));
  
  const response = await fetch('https://www.boredapi.com/api/activity');
  const dados = await response.json();
  
  res.status(200).json( { dados, date: new Date().toGMTString() } );    

}
