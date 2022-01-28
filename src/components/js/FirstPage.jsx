import '../css/firstPage.css';
import React from 'react';

import earth2 from '../media/earth2.jpg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';

const FirstPage = () => {
    return (
        <div className="firstPage">
          <div className="topSection">
            <div className="menuBar">
                <GiHamburgerMenu className='hamBurger' />
            </div>
            <div className="navBar">
              <ul className='login'>Guest</ul>
              <CgProfile className='profileLogo' />
            </div>
          </div>
          <div className="bodySection">
            <div className="leftTab">
              <div className="earth">
                <img src={earth2} alt="Earth" className='earthImage' />
              </div>
              <div className="searchCity">
                <button className='searchButton'>Search</button>
                <input type="text" className='inputBar' placeholder='Enter city' />
              </div>
            </div>
            <div className="rightTab">

            </div>
          </div>
        </div>
    );
}

export default FirstPage;