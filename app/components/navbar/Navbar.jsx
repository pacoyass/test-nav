import React from 'react'
import MainNav from './MainNav'
import FirstNav from './FirstNav'

export default function Navbar() {
  return (
 <nav  className='grid grid-cols-1  lg:gap-5 md:gap-2'  >
    <div>
     <FirstNav/>
      </div>
      <div>
         <MainNav/>  
      </div>
 
   
 
 </nav>
  )
}
