import React from 'react'

export const About = () => {
  return (
    <div className='container mx-auto pt-10'>
      <h1 className="text-center font-extrabold text-4xl pb-10">About this Blog</h1>
      <h2 className="text-2xl font-semibold pb-4">Introduction</h2>
      <p className='font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus expedita eos consequuntur ipsum cupiditate aliquam? Perspiciatis earum corrupti voluptatem reprehenderit, odit quos animi inventore totam quasi facere nesciunt praesentium ex.</p>

      <h2 className='text-2xl font-semibold py-4'>Services Offered</h2>
      <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui exercitationem, porro doloremque itaque veritatis doloribus repellat necessitatibus dignissimos fuga vitae aut laboriosam. Expedita adipisci, quasi qui ab earum labore sit.</p>
      <p>We offer the following services</p>
      <div className='grid grid-cols-3 gap-4 text-center pt-4 pb-4'>
        <div className='bg-white p-4 rounded text-black'>
          <h2 className='font-semibold'>Web Development</h2>
        </div>
        <div className='bg-white p-4 rounded text-black'>
          <h2 className='font-semibold'>Web Applications</h2>
        </div>
        <div className='bg-white p-4 rounded text-black'>
          <h2 className='font-semibold'>Mobile Applications</h2>
        </div>
        <div className='bg-white p-4 rounded text-black'>
          <h2 className='font-semibold'>Databases</h2>
        </div>
        <div className='bg-white p-4 rounded text-black'>
          <h2 className='font-semibold'>Network</h2>
        </div>
        <div className='bg-white p-4 rounded text-black'>
          <h2 className='font-semibold'>Algorithms</h2>
        </div>
        <div className='bg-white p-4 rounded text-black'>
          <h2 className='font-semibold'>Data Structures</h2>
        </div>
        <div className='bg-white p-4 rounded text-black'>
          <h2 className='font-semibold'>UI/UX</h2>
        </div>
        <div className='bg-white p-4 rounded text-black'>
          <h2 className='font-semibold'>Frontend/Backend</h2>
        </div>
      </div>
      <h2 className='font-semibold text-2xl py-4'>Contact Us</h2>
      <p className='font-light py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facere blanditiis deserunt a, provident assumenda quasi ad debitis, reiciendis rem ab vero voluptas velit porro reprehenderit fuga commodi voluptatum! Esse!</p>
    </div>
  )
}
export default About;
