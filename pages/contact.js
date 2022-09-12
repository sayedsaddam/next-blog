import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'
export const Contact = () => {
  const [name, setName] = useState(undefined)
  const [email, setEmail] = useState(undefined)
  const [phone, setPhone] = useState(undefined)
  const [desc, setDesc] = useState(undefined)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, phone, email, desc)
    const data = `{ "name" : "${name}", "phone": "${phone}", "email": "${email}", "desc": "${desc}" }`;
    fetch('http://localhost:3000/api/postcontact', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.text())
    .then(data => {
      console.log('Success: ', data)
      alert('Thanks for contacting us.')
    })
    .catch((error) => {
      console.error('Error: ', error)
    })
  }
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>Enter your name</label>
          <input type="text" value={name} onChange={event => setName(event.target.value)} id="name" name='name' />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>Email address</label>
          <input type="email" value={email} onChange={event => setEmail(event.target.value)} name='email' id="email" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>Phone</label>
          <input type="phone" value={phone} onChange={event => setPhone(event.target.value)} name='phone' id="phone" />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="desc">Elaborate your concern</label>
          <textarea value={desc} onChange={event => setDesc(event.target.value)} placeholder="Write your concern here" name='desc' id="desc" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
export default Contact;