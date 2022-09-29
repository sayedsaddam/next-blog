import React, { useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import * as fs from 'fs'
import InfiniteScroll from 'react-infinite-scroll-component'

// Step 1: Collect all the files from the blogdata directory
// Step 2: Iterate through them and Display them

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs)
  const [count, setCount] = useState(2)
  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`)
    setCount(count + 2)
    let data = await d.json()
    setBlogs(data)
  }
  return (
    <div className='container mx-auto pt-10'>
      <main className="">
        <InfiniteScroll
        dataLength={blogs.length}
        next={fetchData}
        hasMore={props.allCount !== blogs.length}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <strong>Yay! You're all set...</strong>
          </p>
        }>
          {blogs.map((blogitem) => {
            return (
              <div className="bg-black text-white mb-4 p-5 container mx-auto">
                <div key={blogitem.slug}>
                  <Link href={`/posts/${blogitem.slug}`}>
                    <h3 className='font-extrabold text-gray-300 text-4xl'>{blogitem.title}</h3>
                  </Link>
                  <p className='text-xl'>{blogitem.metadesc.substr(0, 140)}...</p>
                  <Link href={`/posts/${blogitem.slug}`}>
                    <button className='bg-gray-500 text-white py-2 px-6 mt-4 font-bold shadow-lg hover:bg-gray-700'>Read More...</button>
                  </Link>
                </div>
              </div>
            )
          })}
        </InfiniteScroll>
      </main>
    </div>
  )
}

// getServerSideProps
// export async function getServerSideProps(context){
//   let data = await fetch('http://localhost:3000/api/blogs')
//   let allBlogs = await data.json()
//   return {
//     props: { allBlogs } // will be passed to the page component as props
//   }
// }

// getStaticProps
export async function getStaticProps(context){
  let data = await fs.promises.readdir('blogdata')
  let allCount = data.length
  let myfile;
  let allBlogs = []
  for(let index = 0; index < 2; index++){
    const item = data[index]
    // console.log(item)
    myfile = await fs.promises.readFile((`blogdata/`+item), 'utf-8')
    allBlogs.push(JSON.parse(myfile))
  }
  return {
    props: {allBlogs, allCount}
  }
}

export default Blog;