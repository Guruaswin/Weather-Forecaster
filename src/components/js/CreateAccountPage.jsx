import React from 'react';
import '../css/createAccountPage.css';

import Logo from '../media/websiteLogo.png';
import { BiHomeAlt, BiChevronUp, BiChevronDown } from 'react-icons/bi';
import { IoMdSettings } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';


const CreateAccountPage = () => {
    const toggle = (e) => {
        var dropdownMenu = document.getElementById('dropdownMenu');
        console.log(dropdownMenu);
        if(dropdownMenu.classList.contains("hidden")){
            dropdownMenu.classList.remove("hidden");
        } else {
            dropdownMenu.classList.add("hidden");
        }
    }

    return (
        <div className="createAccountPage">
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
            <div className="form">
            <form action='' className='createAccountForm'>
                <h3>Create an account</h3>
                <div className='createInputFields'>
                    <label>Name</label>
                    <input type='text' minLength={3} required/>
                    <label>Email</label>
                    <input type='email' required/>
                    <label>Password</label>
                    <input type='password' minLength={8} maxLength={20} required/>
                    <label>Confirm Password</label>
                    <input type='password' minLength={8} maxLength={20} required/>
                    <label>Mobile number</label>
                    <input type='text' maxLength={10} required/>
                    <label>City</label>
                    <input type='text' required/>
                    <label>Do you want to receive notification?</label>
                </div>
                <div className="notifications">
                    <label>Yes</label>
                    <input type='checkbox' defaultChecked className='checkbox'/>
                    <label>No</label>
                    <input type='checkbox' className='checkbox'/>
                </div>
                <div className="buttons">
                    <button>Create</button>
                    <button>Cancel</button>
                </div>
            </form>
            </div>
        </div>
    );
}

export default CreateAccountPage;