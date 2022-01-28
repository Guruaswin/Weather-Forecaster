import React from 'react';
import '../css/feedbackPage.css';

import { GiHamburgerMenu } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';

const FeedbackPage = () => {
    return (
        <div className="feedbackPage">
            <div className="topSection">
                <div className="menuBar">
                    <GiHamburgerMenu className='hamBurger' />
                </div>
                <div className="navBar">
                    <ul className='login'>Guest</ul>
                    <CgProfile className='profileLogo' />
                </div>
            </div>
            <form action="" className='feedbackForm'>
                <label>Feedback Form</label>
                <div className="inputFields">
                    <label className='title'>Title</label>
                    <input type="text" placeholder='Enter title' className='titleInput'/>
                    <label className='description'>Description</label>
                    <textarea className='descriptionInput' placeholder='Enter description' cols="50" rows="10"></textarea>
                    <button>Submit</button>
                    <button>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default FeedbackPage;