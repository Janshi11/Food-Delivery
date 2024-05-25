import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets'; // Assuming you have an assets file

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <h1>Yummy-Tummy</h1>
                    <p>Flavorful Footprints:</p>
                    <p>Follow Our Tasty Trails!</p>
                    <p>Stay Hungry, Stay Adventurous!</p>
                    <p>Explore Culinary Bliss :)</p>
                    <p>Let's Plate Up Happiness Together!</p>
                
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
                </div>
                <div className='footer-content-center'>
                    <h1>COMPANY</h1>
                    <p> • Home</p>
                    <p> • About Us</p>
                    <p> • Delivery</p>
                    <p> • Privacy Policy</p>
                </div>
                <div className='footer-content-right'>
                    <h1>Drop Us a Note</h1>
                    <p><span className="title">Phone-number :</span> <span>+1-212-678-9087</span></p>
                    <p><span className="title">Gmail :</span> <span>yummytummy@gmail.com</span></p>
                </div>


            </div>
            <hr />
            <div className="footer-copyright">
                &copy; 2024 yummytummy.com | All rights reserved. | Foodies is a registered trademark. | Privacy Policy | Terms of Service
            </div>
        </div>
    );
}

export default Footer;
