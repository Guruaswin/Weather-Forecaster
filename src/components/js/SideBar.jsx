import React from "react";
import "../css/sideBar.css";

import Logo from '../media/websiteLogo.png';
import { BiHomeAlt, BiChevronUp, BiChevronDown } from 'react-icons/bi';
import { IoMdSettings } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';

var menuDown = document.getElementById('menuDown');

const SideBar = () => {
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
        <div className="sideBar">
            <div className="navBar">
                <img src={Logo} alt="" className="websiteLogo"/>
                <h4 className="websiteName">Weather Forecaster</h4>
                <div className="navBarContents">
                    <CgProfile className="profileLogo"/>
                    <a className="navbarItems">Guest</a>
                    <a className="navbarItems">Menu</a>
                    <BiChevronUp className="menuIcon menuUp " id="menuUp" />
                    <BiChevronDown className="menuIcon menuDown" id="menuDown" onClick={toggle} />
                    <div className="dropdownMenu hidden" id="dropdownMenu">
                        <div className="home borderLine displayContents">
                            <BiHomeAlt className="homeIcon icon" />
                            <a className="list">Home</a>
                        </div>
                        <div className="settings borderLine displayContents">
                            <IoMdSettings className="settingsIcon icon" />
                            <a className="list">Settings</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="description">
                <h3>Weather Forecaster</h3>
                <p>
                    This website provides the weather forecast of any particular location.<br/>
                    It also sends you the forecast on regular intervals
                </p>
            </div>
            <div className="hello1"></div>
            <div className="hello2"></div>
            <div className="footerBar">
                <a href="">Like to give a feedback?</a>
                <a href="">Mail us at - weatherforecaster@gmail.com</a>
            </div>
        </div>
    );
};

export default SideBar;
