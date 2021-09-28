import React from 'react'
import {Link} from "react-router-dom"


function About(){
   return (
      <main>
         <div className="justify-center items-right h-screen ">
         <h1 className="text-5xl cursive item-center justify-center flex text-tranform: uppercase ">
            our platform offers</h1>
            <div className="grid grid-cols-3 gap-8 flex justify-center items-center overflow-hidden">
            <div className="bg-gray-200 h-20 rounded items-baseline p-2"> 
            <p className="font-bold">Penetration testing</p> 
            <p>we have hackers who use the capabilities and talents for good</p> 
            <a href="#">Explore</a>               
            </div>
            <div className="bg-gray-200 rounded h-full p-2">
               <p className="font-bold">BugBounty</p> 
               <p> Get rewarded for disclosing vulnerabilities</p>
            </div>
            <div className="bg-gray-200 h-20 rounded p-2">
               <p className="font-bold">Report</p>
               <p>Make a detailed report on a vulnerability in our partner comapnies systmes</p>
               </div>
            </div>
         </div>
      </main>
   )
}
export default About