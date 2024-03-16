import React from 'react'
import {Link} from 'react-router-dom'//Routes

const NavBar=()=> {
  return (
    
        <nav className='navigation'>{/*using link better than a /to not refresh only one page*/}
        <Link className="my-link"to='/budget-app'>Budget App</Link>
    <Link className='my-link'  to='/home'>Home</Link>
    <Link className='my-link' to='/about'>About</Link>
    <Link  className='my-link'to='/contact'>Contact</Link>
</nav>
    
  )
}

export default NavBar