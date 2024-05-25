

import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Visit our menu</h1>
        <p className='explore-menu-text'>Picture this: a menu packed with all your favorites, from juicy burgers to crispy tacos. It's like a foodie's dream come true, all at your fingertips. So, why wait? Let's eat!</p>
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=> {
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All" :item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""}src={item.menu_image} alt={item.menu_name} />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr></hr>
    </div>
  );
};

export default ExploreMenu;
