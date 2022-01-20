import logo from './logo.svg';
import './App.css';
import earth from './earth.jpg';
import { GiHamburgerMenu } from 'react-icons/gi';

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
      For login page from line 29
      */}
      <div className="menuBar">
            {/*Hamburger Icon*/}
            <GiHamburgerMenu className='hamBurger'/>
      </div>
      {/*Main Box in the middle*/}
      <div className="CentreBox">
        {/*Continue with google tab*/}
        <input className="Continue" placeholder='Continue with Google?' type={Text}/>
      </div>
    </div>
  );
}

export default App;
