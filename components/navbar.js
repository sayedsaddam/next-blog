import React from 'react'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

const Navbar = () => {
  return (
   <nav className={styles.mainnav}>
      <style jsx>
         {`
            ul li{
               cursor: pointer;
            }   
         `}
      </style>
      <ul>
         <Link href="/" passHref><li>Home</li></Link>
         <Link href="/about" passHref><li>About</li></Link>
         <Link href="/blog" passHref><li>Blog</li></Link>
         <Link href="/contact" passHref><li>Contact</li></Link>
      </ul>
   </nav>
  )
}

export default Navbar;