import React from 'react'
import './style.css';

function Header() {
  return (
    <header className="header-div">
  <div className="header-logo">
    <h1 className="header-title"><a href="/">Hartley Lab</a></h1>
  </div>  
  <nav className="header-navigation">
        {
            localStorage.getItem('token')?
    <ul className="nav">
            
      <li onClick={()=>{localStorage.removeItem('token')}}><a href="/login">Logout</a></li> 
</ul>:
    <ul className="nav">
           <li><a href="/login">Login</a></li> 
      <li><a href="/register">Register</a></li> 
    </ul>

        }
   
  </nav>
</header>

  )
}

export default Header