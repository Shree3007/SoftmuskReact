import React, {useState} from 'react'
import './Navbar.css'
import {FaBars, FaTimes, FaRegPaperPlane, FaFacebookF} from 'react-icons/fa'
import {GoLocation} from 'react-icons/go'
import {BsTelephone, BsTwitter} from 'react-icons/bs'
import {RiLinkedinFill} from 'react-icons/ri'
import logo from '../images/logo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const[nav,setNav] = useState(false)
  const handleNav = () => setNav(!nav)
  return (
    <>
 

    <div name="top" className='navbar'>
    <div className="contain">
     <div className="aaa">
        <div className="bbb">
          <ul className='add'>
            <li><GoLocation className='iconk'/>  Khanapur Rd, Tilakwadi, Belgaum</li>
            <li><BsTelephone className='iconk'/>  08314263506</li>
            <li> <FaRegPaperPlane className='iconk'/>  info@softmusk.com</li>
          </ul>
        </div>
        <div className="ccc">
         <ul className='add'>
          <Link to='#'><li><FaFacebookF className='icon'/></li></Link>
          <Link to='#' ><li><BsTwitter className='icon'/></li></Link>
          <Link to='#'><li><RiLinkedinFill className='icon'/></li></Link>
         </ul>
        </div>
      </div>

</div>    




        
         <div className="container">
          <div className='logo'>
            <img src={logo} alt="logo" />
            <h2>Softmusk</h2>
            </div>
            <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
              <li className='list_item'><Link to='/'>Home</Link></li>
              <li  className='list_item'><Link to='/services'>Service</Link></li>
              <li className='list_item'><Link to='/portfolio'>Portfolio</Link></li>
              <li className='list_item'><Link to='/support'>Support</Link></li>
              <li className='list_item'><Link to='/contact'>Contact</Link></li>
              <li className='list_item'><Link to='/customer'>Login</Link></li>

              
            </ul>
            <div className="bar" onClick={handleNav}>
            {!nav ? (<FaBars className='iconh'/>) : (<FaTimes className='iconh' />)}
              
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar
