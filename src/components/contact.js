import React from 'react'


function Contact(){
   return (
      <main className="bg-blue-900 rounded postion-absolute ">
         <div className="justify-center items-right ">
         <h1 className="text-5xl cursive item-center justify-center flex ">Contact</h1>
            <div className="grid grid-cols-2 gap-4 flex justify-center items-center overflow-hidden">
            <div className="bg-white h-20 rounded items-baseline">
                  <image source='' className="h-48 w-full object-cover" />
                  
            </div>
            <div className="bg-white h-20 rounded ">Hello</div>
            <div className="bg-white h-20 rounded ">Hello</div>
            </div>
         </div>
      </main>
   )
}
export default Contact