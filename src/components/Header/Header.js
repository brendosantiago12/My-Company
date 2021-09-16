import React from 'react'

import { FaUserAlt } from 'react-icons/fa'
import { NavBar, NavMenu, Logo, User } from './style';
const Header = ()=>{
    return(
        <NavBar>
            <NavMenu>
                <Logo to="/">Company</Logo>
                <User> <FaUserAlt/> </User>
            </NavMenu>
        </NavBar>
    )
}
export default Header;