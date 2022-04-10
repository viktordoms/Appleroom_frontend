import React from 'react';
import {Link} from "react-router-dom";

function MainNav() {
    return (
        <div className='header__main_nav d-flex justify-content_center align-items_center'>
            <ul className='d-flex justify-content_center align-items_center'>
                <li><Link to='/category/totalniy-rozprodazh'>Тотальний Розродаж</Link></li>
                <li><Link to='/category/iphone'>IPhone</Link></li>
                <li><Link to='/category/mac'>Mac</Link></li>
                <li><Link to='/category/apple-watch'>Apple Watch</Link></li>
                <li><Link to='/category/ipad'>IPad</Link></li>
                <li><Link to='/category/airpods'>Airpods</Link></li>
                <li><Link to='/category/gadzheti'>Гаджети</Link></li>
                <li><Link to='/category/ipod'>Акустика</Link></li>
                <li><Link to='/category/aksesuari'>Аксесуари</Link></li>
                <li><Link to='/category/used'>Вживана техніка</Link></li>
            </ul>
        </div>
    );
}

export default MainNav;
