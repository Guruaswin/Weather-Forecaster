// import logo from './logo.svg';
import './App.css';
// import earth from './earth.jpg';
import earth2 from './earth2.jpg';
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
      </div> 
      <div className='FeedBack_Page'></div> */}
      <div className="firstPage">
        <div className="topSection">
          <div className="menuBar">
            <GiHamburgerMenu className='hamBurger'/>
          </div>
          <div className="navBar">
            <ul className='login'>Guest</ul>
          </div>
        </div>
        <div className="bodySection">
            <div className="leftTab">
              <div className="earth">
                <img src={earth2} alt="Earth" className='earthImage'/>
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
    </div>
  );
}

export default App;
