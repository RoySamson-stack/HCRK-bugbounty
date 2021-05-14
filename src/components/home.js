import React from 'react'
import About from './about'
import Contact from './contact'

function Home() {
   return (
      <main className="">
         <h1 className="cursive items-center justify-center text-5xl home-name text-transform: uppercase">Join thechallenge</h1>
         <div className="h-screen">
         <div className="grid grid-cols-2 gap-8 flex justify-center items-center overflow-hidden ">
            <div className="bg-red-500 h-20 rounded items-baseline">
               <image source='' className="h-48 w-full object-cover" />

            </div>
            <div className="bg-red-500 rounded h-full">Hello</div>
            </div>
         </div>
         <About />
         <Contact />
      </main>
   )
}
export default Home