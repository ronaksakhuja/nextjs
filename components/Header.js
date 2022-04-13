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
          <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="/blog" className="nav-link"><em>Blog</em></a></li>
        </ul>
      </div>
      </div>
    </header>
  )
}
