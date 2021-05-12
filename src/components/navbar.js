import React from 'react'
import {NavLink} from 'reatc-router-dom'

function NavBar(){
   return(
      <nav className="top-0 position-absolute sticky ">
         <NavLink
            to="/"
            exact
            className="text-bold "
         >HCRK</NavLink>
      <NavLink
            to='/'
            exact
            className=""
         >
      Home
      </NavLink>
      </nav>
   )
}
export default NavBar