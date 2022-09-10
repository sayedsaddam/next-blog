import React, { useState } from "react"
// import { useRouter } from "next/router"
import styles from '../../styles/BlogPost.module.css'
import * as fs from 'fs'

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page

const Slug = (props) => {
   const [blog, setBlog] = useState(props.myBlog)
   return (
      <div className={styles.container}>
         <main className={styles.main}>
            <h1 className={styles.blogItemh3}>{blog.title}</h1>
            <small>Author &raquo; {blog.author}</small>
            <hr />
            <div>
               <p className={styles.blogItemp}>{blog && blog.content}</p>
            </div>
         </main>
      </div>
   )
}
// getServerSideProps > server side rendering
// export async function getServerSideProps(context){
//    const { slug } = context.query
//    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
//    let myBlog = await data.json()
//    return {
//       props: { myBlog }
//    }
// }

// getStaticPaths
export async function getStaticPaths(){
   return{
      paths: [
         {params: {slug: 'how-to-learn-javascript'}},
         {params: {slug: 'how-to-learn-flask'}},
         {params: {slug: 'how-to-learn-nextjs'}}
      ],
      fallback: true // false or blocking
   }
}
// getStaticProps
export async function getStaticProps(context){
   const {slug} = context.params
   let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')
   return {
      props: {myBlog: JSON.parse(myBlog)}
   }
}

export default Slug;