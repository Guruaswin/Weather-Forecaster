import '../css/firstPage.css';
import React from 'react';
import { useEffect, useState } from "react";
import earth2 from '../media/earth2.jpg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
import Weather from '..\backend\firstpagebackend\Weather.js';

const FirstPage = () => {


  //for importing weather data from open weathermap
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log(result);
        });
    }
    fetchData();
  }, [lat, long]);


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
          {/* {(typeof data.main != 'undefined') ? (
            <Weather weatherData={data} />
          ) : (
            <div></div>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default FirstPage;