import React from "react"
import { useRouter } from "next/router"
import styles from '../../styles/BlogPost.module.css'

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page

const slug = () => {
   const router = useRouter()
   const { slug } = router.query
   return (
      <div className={styles.container}>
         <main className={styles.main}>
            <h1>Title of the page: {slug}</h1>
            <hr />
            <div>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ut alias quasi veniam numquam nostrum? Asperiores magnam harum incidunt? Alias impedit optio ut, eligendi at veniam enim nulla a perspiciatis!
            </div>
         </main>
      </div>
   )
}

export default slug;