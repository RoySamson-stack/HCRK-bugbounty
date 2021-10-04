import React from 'react'
import About from './about'
import Contact from './contact'

function Home() {
  return (
    <main className="">
       <div className="">
      <h1
        className="cursive items-center justify-center text-3xl text-transform: uppercase">
        Join HCRK</h1>
      <p className="text-left">
         HCRK intorduces a world where cyber security is connected in the country to connect comapnies and hackers
         so as to make a safe cyber space for use.
      </p>
      <div className="grid grid-cols-2 gap-2  ">
        <div className="bg-gray-300 h-20 w-200">hello</div>
        <div className="bg-gray-300 h-20 w-200">hello</div>
      </div>
      <div className="">
        <button type="" className="bg-blue-500 rounded ml-4 p-2">Try HCKR</button>
      </div>
      </div>
      <About/>
      <Contact/>
    </main>
  )
}
export default Home