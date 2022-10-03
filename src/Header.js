import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function Header() {
    return ( <
        div className = 'header' >
        <
        img className = 'header-logo'
        src = 'https://logos-world.net/wp-content/uploads/2022/05/Alibaba-Logo.png'
        width = { 150 }
        />

        {
            /* <div className='header-search'>
                     <input className='header-searchInput' type="text" />
                     <SearchIcon className='header-searchIcon' />
                    </div> */
        }

        <
        form class = "d-flex input-group w-auto"
        role = "search" >
        <
        input type = "text"
        name = ""
        placeholder = "What are you looking for..."
        id = "myInput" / >
        <
        input type = "submit"
        name = ""
        value = "Search" / >
        <
        /form> <
        div className = 'header-searchIcon' >
        <
        PermIdentityIcon / >
        <
        span > Sign in < /span> <
        span > Join
        for free < /span> <
        ChatBubbleOutlineIcon / >
        <
        span > Messages < /span>&nbsp; <
        MenuBookIcon / >
        <
        span > Orders < /span> <
        AddShoppingCartIcon / >
        <
        span > Cart < /span> <
        /div>



        {
            /* <div className='header-nav'>
                        <div className='header-option'>
                            <span className='header-optionOne'>Sign in</span>
                            <span className='header-optionOne'>Join for free</span>
                        </div>

                        <div className='header-option'>
                        <span className='header-optionOne'>Messages</span>
                        </div>

                        <div className='header-option'>
                        <span className='header-optionOne'>Orders</span>
                        </div>

                        <div className='header-option'>
                        <span className='header-optionOne'>Cart</span>
                        </div>
                        
                    </div> */
        } <
        /div>
    )
}