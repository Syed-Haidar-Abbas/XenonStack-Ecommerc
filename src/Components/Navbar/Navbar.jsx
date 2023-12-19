import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/images/logo1.png'
import { Link } from 'react-router-dom';
export const Navbar = () => {

  const [menu,setMenu] = useState("shop");
  return (
    <div className='navbar'>
      <Link style={{textDecoration:'none'}} to='/'>
        <div className='nav-logo'>
          <img src={logo} className='logo-img' alt=''></img>
          <p>E-Furniture</p>
        </div>
      </Link>
      <ul className='nav-menu'>
          <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop{menu==="shop"?<hr/>:<></>} </Link></li>
          <li onClick={()=>{setMenu("sofas")}}><Link style={{textDecoration:'none'}} to='/sofas'>Sofas{menu==="sofas"?<hr/>:<></>}</Link></li>
          <li onClick={()=>{setMenu("beds")}}><Link style={{textDecoration:'none'}} to='/beds'>Beds{menu==="beds"?<hr/>:<></>}</Link></li>
          <li onClick={()=>{setMenu("tables")}}><Link style={{textDecoration:'none'}} to='/tables'>Tables{menu==="tables"?<hr/>:<></>}</Link></li>
      </ul>
      <div className='nav-login'>
        <Link to='/login'><button>Login</button></Link>
      </div>
    </div>
  )
}
