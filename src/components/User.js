import Link from 'next/link'

export default function User() {

  return (

    <p>
      <Link href="/api/users/1">
        <a>Pesquisar Usuario</a>
      </Link>
    </p>

  )
}
