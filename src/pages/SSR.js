

function SSR({ date }) {
  return (
    <>
    <div>SSR</div>

    <div>{date}</div>

    </>
  )
}

// export async function getStaticProps() {
  
//   const response = await fetch( 'http://localhost:3000/api/people');
//   const {date} = await response.json();

//   return { 
//     props: { date },
//   }
// }

export default SSR