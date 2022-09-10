import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import * as fs from 'fs'

// Step 1: Collect all the files from the blogdata directory
// Step 2: Iterate through them and Display them

const Blog = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    // console.log('useEffect is running...')
    fetch('http://localhost:3000/api/blogs').then((a) => {
      return a.json()
    })
    .then((parsed) => {
      // console.log(parsed)
      setBlogs(parsed)
    })
  }, [])
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogitem) => {
          return (
            <div key={blogitem.slug}>
              <Link href={`/posts/${blogitem.slug}`}>
                <h3 className={styles.blogItemh3}>{blogitem.title}</h3>
              </Link>
              <small>By: {blogitem.author} on {Date()}</small>
              <p className={styles.blogItemp}>{blogitem.content.substr(0, 140)}...</p>
            </div>
          )
        })}
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
  let myfile;
  let allBlogs = []
  for(let index = 0; index < data.length; index++){
    const item = data[index]
    // console.log(item)
    myfile = await fs.promises.readFile((`blogdata/`+item), 'utf-8')
    allBlogs.push(JSON.parse(myfile))
  }
  return {
    props: {allBlogs}
  }
}

export default Blog;