import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className='container'>
        <Link href='/' passHref>
          <h1>Ronak Website</h1>
        </Link>
        <div className="nav">
        <ul>
          <li><Link href="/" className="nav-link" passHref>Home</Link></li>
          <li><Link href="/blog" className="nav-link" passHref>Blog</Link></li>
        </ul>
      </div>
      </div>
    </header>
  )
}
