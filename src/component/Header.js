/*eslint-disable*/
import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from './images/mylogo.jpg';

const Header = () => {
  const [openNav, setNavbar] = useState(false);
  const toggleNav = () => setNavbar(!openNav);

  return (
    <div className="app">
      <div className="logo">
        <img src={logo} height={40} width={64} alt="Ifeanyi Oti" />
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#recommendations">Testimonials</a></li>
        <li><a href="#connect">Contact</a></li>
      </ul>

      <div className="humbuger" onClick={toggleNav}>
        {openNav ? <AiOutlineCloseCircle /> : <GiHamburgerMenu />}
      </div>

      <ul onKeyDown={toggleNav} onClick={toggleNav} className={openNav ? 'hamburgerOn' : 'hamburgerOff'}>
        <li onClick={toggleNav}><a href="#home">Home</a></li>
        <li onClick={toggleNav}><a href="#about">About</a></li>
        <li onClick={toggleNav}><a href="#project">Projects</a></li>
        <li onClick={toggleNav}><a href="#skills">Skills</a></li>
        <li onClick={toggleNav}><a href="#education">Education</a></li>
        <li onClick={toggleNav}><a href="#recommendations">Testimonials</a></li>
        <li onClick={toggleNav}><a href="#connect">Contact</a></li>
      </ul>
    </div>
  );
};

export default Header;
