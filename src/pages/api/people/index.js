
export default async function handler(req, res) {

  const tokenStr = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsImVtYWlsIjoidXNlckBnbWFpbC5jb20iLCJ2c190b2tlbiI6MCwiaWF0IjoxNjEzOTk1Nzc3LCJleHAiOjE2MTQwMzg5Nzd9.ZJQ4O8T9ZFpjvCQCdBokTqp7PkgPC9WFjmgnGJHep-A';
  
  const response = await fetch('http://localhost:4000/usuarios', {headers:{"Authorization" : `Bearer ${tokenStr}`}}  );
  const data = await response.json();
  
  res.status(200).json( {date: data } );
  
  // const dynamicDate = new Date();
  // res.status(200).json( {date: dynamicDate.toGMTString()} );

}
