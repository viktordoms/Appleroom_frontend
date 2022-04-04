import React from 'react'

import './header.scss'
import HeaderTopline from "./elements/Header_topline";
import HeaderMain from "./elements/Header _main";
import HeaderMainNav from "./elements/Header_main_nav";

function Header() {

    return (
        <header className='header'>
            <HeaderTopline/>
            <HeaderMain/>
            <HeaderMainNav/>
        </header>
    )
}

export default Header
