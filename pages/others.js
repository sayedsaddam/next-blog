import { useState } from "react";

function Header({title}){
   return <h1>{title ? title : 'Default Title'}</h1>;
}
export default function Others() {
   function handleClick(){
      setLikes(likes + 1)
   }
   const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
   const [likes, setLikes] = useState(0);
   return (
      <>
         <Header title="Develop. Preview. Ship. " />
         <ul>
            {names.map((name) => (
               <li key={name}>{name}</li>
            ))}
         </ul>
         <button onClick={handleClick}>Like ({likes})</button>
      </>
   )
}