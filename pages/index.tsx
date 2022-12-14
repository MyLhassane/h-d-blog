import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PostCard, Categories, PostWidget } from '../components';

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
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post) => <PostCard post={post} key={post.title} />)}
        </div>
        {/* Widgets */}
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            {/* Recent/Relevent Posts */}
            <PostWidget />
            {/* Categiries */}
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
