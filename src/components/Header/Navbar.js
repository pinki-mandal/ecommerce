import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge'
import './Navbar.css'
import  Avatar  from '@mui/material/Avatar';
import {NavLink} from 'react-router-dom'
import { useSelector } from "react-redux";


function Navbar(){
  const state = useSelector((state)=> state.handleCart)
  return (
    <header>
      <nav>
          <div className='left'>
            <div className='navlog'>
              <NavLink to="">
              <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"  alt=""  height="35px" />
              </NavLink>
            </div>
            <div className='nav_searchbaar'>
              <input type="text" name="" id=""/>
              <div className='search_icon'>
                <SearchIcon id="search"/>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='nav_btn'>

            </div>
            <div className='cart_btn'  >
              <Badge badgeContent= {state.length}   color="primary">
                <ShoppingCartIcon id="icon"/>
              </Badge>
              <NavLink to="/cart"><p>Cart</p></NavLink>
            </div>
            <Avatar className='avatar'/>
          </div>
        </nav>
    </header>
  )
}
export default Navbar

