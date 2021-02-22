
export default function testeID({ query: { id } }, res) {
  
  res.status(200).json({ message: `Você pesquisou a ID: ${id}` })
  
}
