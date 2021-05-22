import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook</title>        
      </Head>
      <h1>Hello Facebook</h1>

      {/* Header */} 
      <Header />
      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      </main>
    </div>
  )
}
