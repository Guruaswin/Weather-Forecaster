import '../css/welcomePage.css';
import React from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';


const WelcomePage = () => {
    return (
        <div className="welcomePage">
          <div className="topSection">
            <div className="menuBar">
                <GiHamburgerMenu className='hamBurger' />
            </div>
            <div className="navBar">
              <ul className='contents'>
                <a href=""><CgProfile className='profileLogo' />Guest</a>
                <a href="">About</a>
                <a href="">Home</a>
              </ul>
            </div>
          </div>
          <div className="bodySection">
            <h1>Weather Forecaster</h1>
            <div className='tabs'>
            <div className="leftTab">
              <div className="searchCity">
                <button className='searchButton' type='submit'>Search</button>
                <input type='text' className='inputBar' placeholder='Enter city' />
              </div>
            </div>
            <div className="rightTab">

            </div>
            </div>
          </div>
          <div className="feedbackSection">
            <h4>Like to give us a feedback?</h4>
            <button className='feedbackButtons'>Yes</button>
            <button className='feedbackButtons'>No</button>
          </div>
        </div>
    );
}

export default WelcomePage;
