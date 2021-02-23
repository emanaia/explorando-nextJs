
export default async function getUsers() {

  await new Promise(resolve => setTimeout(resolve, 3000));


    // const tokenStr = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsImVtYWlsIjoidXNlckBnbWFpbC5jb20iLCJ2c190b2tlbiI6MCwiaWF0IjoxNjEzOTk1Nzc3LCJleHAiOjE2MTQwMzg5Nzd9.ZJQ4O8T9ZFpjvCQCdBokTqp7PkgPC9WFjmgnGJHep-A';  
    // const response = await fetch('https://api-painel-ecmp.herokuapp.com/usuarios', {headers:{"Authorization" : `Bearer ${tokenStr}`}}  );
    // const dados = await response.json();

    const response = await fetch('https://www.boredapi.com/api/activity');
    const dados = await response.json();
    
    return { data: dados, date: new Date().toGMTString()}   
}