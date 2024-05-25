import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>
        Enhance your dining experience with the Tummy-Yummy app! <br /> Download now for a culinary adventure like no other!
      </p>
      <div className='app-download-platforms'>
        <img src={assets.play_store} alt="Play Store" />
        <img src={assets.app_store} alt="App Store" />
      </div>
    </div>
  );
}

export default AppDownload;
