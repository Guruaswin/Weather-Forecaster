import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./Earth";

import LoginPage from "./LoginPage";

import React from "react";
import "../css/sideBar.css";

import Logo from '../media/websiteLogo.png';
import { BiHomeAlt, BiChevronUp, BiChevronDown } from 'react-icons/bi';
import { IoMdSettings } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';

var menuDown = document.getElementById('menuDown');

const CanvasContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opaciy: 0.2;
  top: 240px;
  z-index: 0;
`;


const Sample = () => {
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
            {/* <CanvasContainer>
                <Canvas>
                    <Suspense fallback={null}>
                        <Earth />
                    </Suspense>
                </Canvas> 
            </CanvasContainer> */}
            <div className="description">
                <h3>Weather Forecaster</h3>
                <p>
                    This website provides the weather forecast of any particular location.<br/>
                    It also sends you the forecast on regular intervals
                </p>
            </div>
            <div className="hello1"></div>
            <div className="footerBar">
                <Link to={"/feedback"}>Like to give a feedback?</Link>
                <a href="">Mail us at - weatherforecaster@gmail.com</a>
            </div>
        </div>
    );
};

export default Sample;
