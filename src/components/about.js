import React from 'react'


function About(){
   return (
      <main>
         <div className="justify-center items-right h-screen ">
         <h1 className="text-5xl cursive item-center justify-center flex text-tranform: uppercase ">our platform offers</h1>
            <div className="grid grid-cols-3 gap-8 flex justify-center items-center overflow-hidden">
            <div className="bg-red-500 h-20 rounded items-baseline">
                  <image source='' className="h-48 w-full object-cover" />
                  
            </div>
            <div className="bg-red-500 rounded h-full">Hello</div>
            <div className="bg-red-500 h-20 rounded ">Hello</div>
            </div>
         </div>
      </main>
   )
}
export default About