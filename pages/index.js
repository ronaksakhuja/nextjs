import Image from 'next/image'
import Head from 'next/head'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Ronak Website</title>
      </Head>
      <div className="img-container">
      <Image
                  priority
                  src="/images/profile.jpg"
                  className="borderCircle"
                  height={300}
                  width={300}
                />
      </div>
      <section className="headingMd">

        <p>
        I am Ronak Sakhuja, a Software Engineer.<br />
        I love to automate things with code.<br />
        Have been to 20+ hackathons/tech events across<br />
        4 continents, 7 countries, 12 Indian states and counting<br />
        Have a look at some of my working projects.<br />
        Contact me at <a href="https://twitter.com/ronaksakhuja">@ronaksakhuja</a> or by <a href="mailto:ronaksakhuja@gmail.com">email</a>.<br />
        </p>
      </section>
    </div>
  )
}
