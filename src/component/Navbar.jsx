import React from 'react'
import { Link } from 'react-router-dom'




function Navbar() {

  return (
    <div>
        <Link to='/Login'>  <button> Login</button> </Link>
        <Link to='/SignUP'>  <button> Sign up</button> </Link>

    </div>
  )
}

export default Navbar