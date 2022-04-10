import React from 'react'

import './header.scss'
import Topline from "./elements/Topline";
import Main from "./elements/Main";
import MainNav from "./elements/Main_nav";

function Header() {

    return (
        <header className='header'>
            <Topline/>
            <Main/>
            <MainNav/>
        </header>
    )
}

export default Header
