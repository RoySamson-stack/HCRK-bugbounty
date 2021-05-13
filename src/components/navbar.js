import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar(){
   return(
      <nav className=" rounded top-0 position-absolute sticky justify-between bg-blue-500 h-20">
         <NavLink
            to="/"
            exact
            className="cursive text-xl"
         >HCRK</NavLink>
      <NavLink
            to='/'
            exact
            className="inline-flex items-center justify-center py-3 px3"
         >
      Home
      </NavLink>
      </nav>
   )
}
export default NavBar