import React from 'react';
import '../css/loginPage.css';

import { GiHamburgerMenu } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';

const LoginPage = () => {
    return(
        <div className='loginPage'>
            <div className="topSection">
                <div className="menuBar">
                    <GiHamburgerMenu className='hamBurger' />
                </div>
                    <div className="navBar">
                    <ul className='login'>Guest</ul>
                    <CgProfile className='profileLogo' />
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
                <a href='#' className='createAccButton'>Create an account </a>
            </form>
        </div>
    );
}

export default LoginPage;