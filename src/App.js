import logo from './logo.svg';
import './App.css';
import earth from './earth.jpg';
import { GiHamburgerMenu} from 'react-icons/gi';
import {GrClose} from 'react-icons/gr';

function App() {
  return (
    <div className="App">
      {/* <div className='firstPage'>
        <div className='navBar'></div>
        <div className='leftTab'>
          <img src={earth} className='leftTab_image'/>
          <div className='leftTab_bottom'>
            <div className='search'>
              <button className='searchButton'>Search</button>
              <input className='inputBar' type='text' placeholder='Enter location'/>
            </div>
            <div className='city'></div>
          </div>
        </div>
        <div className='rightTab'>
          <div className='rightTop'></div>
          <div className='rightBottom'></div>
        </div>
      </div>  */}
      {/*
      For create account page from line 29
      */}
      <div className="menuBar">
            {/*Hamburger Icon*/}
            {/* <GiHamburgerMenu className='hamBurger'/> */}
            <div className='closeIcon'><GrClose className='GrClose'/></div>
            {/*side menubar*/}
            <div className='home'>
               <h3>Home</h3>
            </div>
            <div className='settings'>
               <h3>Settings</h3>
            </div>
            <div className='profile'>
               <h3>Profile</h3>
            </div>
            <div className='favorites'>
               <h3>Favorites</h3>
            </div>
      </div>
      {/*Create Account left Box*/}
      {/* <div className="LeftTab">
        
      </div> */}
    </div>
  );
}

export default App;
