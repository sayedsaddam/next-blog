import React, { useState } from 'react'
export const Contact = () => {
  const [name, setName] = useState(undefined)
  const [email, setEmail] = useState(undefined)
  const [phone, setPhone] = useState(undefined)
  const [desc, setDesc] = useState(undefined)
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(name, phone, email, desc)
    const data = `{ "name" : "${name}", "phone": "${phone}", "email": "${email}", "desc": "${desc}" }`;
    fetch('http://localhost:3000/api/postcontact', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.text())
    .then(() => {
      // console.log('Success: ', data)
      alert('Thanks for contacting us.')
    })
    .catch((error) => {
      console.error('Error: ', error)
    })
  }
  return (
    <div className='container mx-auto'>
      <h1 className='font-extrabold text-3xl mt-10 text-black mb-10'>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <input className="text-base leading-4 p-4 relative z-0 w-full focus:outline-none text-gray-800 placeholder-gray-800 border" type="text" value={name} onChange={event => setName(event.target.value)} id="name" name='name' placeholder='Enter you name...' />
        </div>
        <div className='mb-3'>
          <input className="text-base leading-4 p-4 relative z-0 w-full focus:outline-none text-gray-800 placeholder-gray-800 border" type="email" value={email} onChange={event => setEmail(event.target.value)} name='email' id="email" placeholder='Enter your email...' />
          <div id="emailHelp" className="text-gray-500">We'll never share your email with anyone else.</div>
        </div>
        <div className='mb-3'>
          <input className="text-base leading-4 p-4 relative z-0 w-full focus:outline-none text-gray-800 placeholder-gray-800 border" type="phone" value={phone} onChange={event => setPhone(event.target.value)} name='phone' id="phone" placeholder='Enter your phone...' />
        </div>
        <div className='mb-3'>
          <textarea className="text-base leading-4 p-4 relative z-0 w-full focus:outline-none text-gray-800 placeholder-gray-800 border" value={desc} onChange={event => setDesc(event.target.value)} placeholder="Write your concern here" name='desc' id="desc" />
        </div>
        <button type="submit" className="bg-black text-white px-20 py-2 font-semibold">Submit</button>
      </form>
    </div>
  )
}
export default Contact;