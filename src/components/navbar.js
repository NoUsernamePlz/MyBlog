import React from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"



function Navbar() {
  const user = true;
  return (
    <div class="navbar">
    <div className="navLeft">
    <i className="navIcon fa-brands fa-square-facebook"></i>
    <i className="navIcon fa-brands fa-square-twitter"></i>
    <i className="navIcon fa-brands fa-square-pinterest"></i>
    <i className="navIcon fa-brands fa-square-instagram"></i>
    </div>
    <div className="navCenter">
        <ul className="navList">
  
            <li className='navListItem'> <Link className="link" to="/">HOME</Link></li>
            <li className='navListItem'><Link className="link" to="/about">ABOUT</Link></li>
            <li className='navListItem'><Link className="link" to="/register">CONTACT</Link></li>
            <li className='navListItem'><Link className="link" to="/write">WRITE</Link></li>
            
            <li className='navListItem'>
              {user && "LOGOUT"}
              </li>
        </ul>
    </div>
    <div className="navRight">
      {
        user ? ( <img className='navImage' src='./pic/pp1.jpg
        ' alt=''/>):(
          <ul className='navList'>
            <li className='navListItem'>
          <Link  className='link' to ="/login">LOGIN</Link></li>
          <li className='navListItem'>
          <Link  className='link' to ="/register">REGISTER</Link></li></ul>
        )

      }
       
        <i class=" navSearch fa-solid fa-magnifying-glass"></i>
    </div>

    </div>
  )
}

export default Navbar