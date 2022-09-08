import React from 'react'

const Dummy = () => {
   return(
      <>
         <style jsx global>
            {`
               .dummy{
                  background: yellow;
                  color: black;
                  border-radius: 5px;
                  padding: 0 10px 0 10px;
               }
            `}
         </style>
         <div className="dummy">I'm a dummy class with a yellow background color...</div>
      </>
   )
}
export default Dummy;