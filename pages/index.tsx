import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const posts = [
  { title: 'React Testing', excerpt: 'Learn React Testing '},
  { title: 'React with Tailwind', excerpt: 'Learn React with tailwind '},
]

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        {/* Articles */}
        <div>
          {posts.map((post, index) => (
            <div>
              {post.title}
              {post.excerpt}
            </div>
          ))}
        </div>
        {/* Widgets */}
        <div className='lg:col-span-4 col-span-1'>
          {/* Recent/Relevent Posts */}
          <div className='lg:sticky relative top-8'></div>
          {/* Categiries */}
          <div className=''></div>
        </div>
      </div>
    </div>
  )
}

export default Home
