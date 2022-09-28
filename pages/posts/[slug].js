import React, { useState } from "react"
// import { useRouter } from "next/router"
import styles from '../../styles/BlogPost.module.css'
import * as fs from 'fs'

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page

const Slug = (props) => {
   function createMarkup(c){
      return {__html: c};
   }
   const [blog, setBlog] = useState(props.myBlog)
   return (
      <div className='container mx-auto'>
         <main className={styles.main}>
            <h1 className='font-semibold text-3xl'>{blog.title}</h1>
            <small className='text-gray-300 font-light'>Author &raquo; {blog.author}</small>
            <hr />
            <div>
               <p className='font-light'>{blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}</p>
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
   let allB = await fs.promises.readdir(`blogdata`)
   allB = allB.map((item) => {
      return { params: { slug: item.split(".")[0] } }
   })
   console.log(allB)
   return {
      paths: allB,
      fallback: true // flase or blocking
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