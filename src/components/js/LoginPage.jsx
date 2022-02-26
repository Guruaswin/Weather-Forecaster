import React from 'react';
import '../css/loginPage.css';

import Logo from '../media/websiteLogo.png';
import { BiHomeAlt, BiChevronUp, BiChevronDown } from 'react-icons/bi';
import { IoMdSettings } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';



const LoginPage = () => {
    const toggle = (e) => {
        var dropdownMenu = document.getElementById('dropdownMenu');
        console.log(dropdownMenu);
        if(dropdownMenu.classList.contains("hidden")){
            dropdownMenu.classList.remove("hidden");
        } else {
            dropdownMenu.classList.add("hidden");
        }
    }

    return(
        <div className='loginPage'>
            <div className="navBar">
                <img src={Logo} alt="" className="websiteLogo"/>
                <h4 className="websiteName">Weather Forecaster</h4>
                <div className="navBarContents">
                    <CgProfile className="profileLogo"/>
                    <a className="navbarItems">Guest</a>
                    <a className="navbarItems">Menu</a>
                    <BiChevronUp className="menuIcon menuUp" id="menuUp" />
                    <BiChevronDown className="menuIcon menuDown" id="menuDown" onClick={toggle} />
                    <div className="dropdownMenu hidden" id="dropdownMenu">
                        <div className="home borderLine displayContents">
                            <BiHomeAlt className="homeIcon icon" />
                            <Link to={"/home"} className="list">Home</Link>
                        </div>
                        <div className="settings borderLine displayContents">
                            <IoMdSettings className="settingsIcon icon" />
                            <Link to={"/login"} className="list">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
            <form className='loginForm'>
                <a href="#" className='googleButton'>Continue with Google account</a>
                <h4>Or</h4>
                <div className='loginInputFields'>
                    <input type="email" placeholder='Enter Email' />
                    <input type="password" placeholder='Enter Password' />
                </div>
                <button className='loginButton'>Login</button>
                <Link to={"/createAccount"} className="createAccButton">Create an Account</Link>
            </form>
        </div>
    );
}

export default LoginPage;