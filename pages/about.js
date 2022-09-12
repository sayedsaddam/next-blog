import React from 'react'
import styles from '../styles/About.module.css'

export const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.center}>About NextJS Blog</h1>
      <h2>Introduction</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus expedita eos consequuntur ipsum cupiditate aliquam? Perspiciatis earum corrupti voluptatem reprehenderit, odit quos animi inventore totam quasi facere nesciunt praesentium ex.</p>
      <h2>Services Offered</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui exercitationem, porro doloremque itaque veritatis doloribus repellat necessitatibus dignissimos fuga vitae aut laboriosam. Expedita adipisci, quasi qui ab earum labore sit.</p>
      <p>We offer the following services</p>
      <ul>
      <li>Service 1</li>
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
        <li>Service 4</li>
        <li>Service 5</li>
        <li>Service 6</li>
        <li>Service 7</li>
      </ul>
      <h2>Contact Us</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facere blanditiis deserunt a, provident assumenda quasi ad debitis, reiciendis rem ab vero voluptas velit porro reprehenderit fuga commodi voluptatum! Esse!</p>
    </div>
  )
}
export default About;
