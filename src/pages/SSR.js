import useAxios from '../utils/useAxios';


function SSR({ date }) {
  return (
    <div>
      {date}
    </div>
  )
}

export async function getStaticProps() {
  
  const response = await fetch( process.env.BASE_URL + '/api/people');
  const {date} = await response.json();

  return { 
    props: { date },
  }
}

export default SSR