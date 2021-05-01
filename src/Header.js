import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';

function Header() {
    return (
        <nav className="header">
            <Link to = "/">
            <img
             className = "header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt= ""/>
            </Link>
            <div className = "header__search">
            <input type="text" placeholder="search" className = "header__searchInput" />
            
             <SearchIcon className = "header__searchIcon"/> 
             
            </div>
           
            <div className = "header__nav">
            {/*1st link*/}
            <Link to ="/login" className = "header__link">
            <div className = "header__option">
            <span className = "header__optionLineOne">Hello Shawn</span>
            <span className = "header__optionLineTwo">Sign in</span>
            </div>
            </Link>

            {/*2nd link*/}
            <Link to ="/" className = "header__link">
            <div className = "header__option">
            <span className = "header__optionLineOne">Return </span>
            <span className = "header__optionLineTwo">& Orders</span>
            </div>
            </Link>

            {/*3rd link*/}
            <Link to ="/checkout" className = "header__link">
            <div className = "header__optionBasket">
            
            <ShoppingBasket/>
            
            <span className = "header__optionLineTwo header__basketCount" >0</span>
            </div>
            </Link>
        </div>

        </nav>
    )
}

export default Header