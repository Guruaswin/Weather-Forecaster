import React from 'react';
import '../css/createAccountPage.css';

import { GiHamburgerMenu } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';

const CreateAccountPage = () => {
    return (
        <div className="createAccountPage">
            <div className="topSection">
                <div className="menuBar">
                    <GiHamburgerMenu className='hamBurger' />
                </div>
                <div className="navBar">
                    <ul className='login'>Guest</ul>
                    <CgProfile className='profileLogo' />
                </div>
            </div>
            <form action="" className='createAccountForm'>
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
                <button>Create</button>
                <button>Cancel</button>
            </form>
        </div>
    );
}

export default CreateAccountPage;