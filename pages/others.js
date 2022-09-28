import { NextPage } from "next"
import Head from "next/head"

export default function Others() {
   return (
      <div className="container mx-auto my-10">
         <div className="border-spacing-5 bg-white text-black m-6 p-6 rounded-md selection:bg-red-700 selection:text-white">
            <h1 className="font-extrabold text-4xl mb-5">Tailwind Installed</h1>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit placeat doloremque fugit dignissimos excepturi quidem cupiditate nam consectetur sequi! Consectetur repudiandae quidem, soluta dolorem maiores id totam cupiditate nemo voluptatum.</p>
         </div>
         <div className="border-spacing-5 bg-white text-black m-6 p-6 rounded-md selection:bg-red-400 selection:text-white">
            <h1 className="font-extrabold text-4xl mb-5">Another Card in TailwindCSS</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, hic ipsa dolorem nostrum, amet, quae voluptates id et labore alias consequuntur maxime! Labore hic consequuntur, harum repellendus voluptatum blanditiis. Molestias.</p>
         </div>
         <div className="border-spacing-5 bg-white text-black m-6 p-6 rounded-md selection:bg-red-400 selection:text-white">
            <h1 className="font-extrabold text-4xl mb-5">Another Card in TailwindCSS</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, hic ipsa dolorem nostrum, amet, quae voluptates id et labore alias consequuntur maxime! Labore hic consequuntur, harum repellendus voluptatum blanditiis. Molestias.</p>
         </div>
      </div>
   )
}