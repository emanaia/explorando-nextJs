

function index( { date } ) {
  // return <div>Data: {date}</div>
  return <div>HELLO! Aqui é a porta de entrada</div>
}

// index.getInitialProps = async (ctx) => {
//   const res = await fetch(process.env.BASE_URL + '/api/people')
//   const json = await res.json();
//   return { date: json.date}
// }

export default index


