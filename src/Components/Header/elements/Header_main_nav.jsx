import React from 'react';

function HeaderMainNav() {
    return (
        <div className='header__main_nav d-flex justify-content_center align-items_center'>
            <ul className='d-flex justify-content_center align-items_center'>
                <li><a href='/category/totalniy-rozprodazh'>Тотальний Розродаж</a></li>
                <li><a href='/category/iphone'>IPhone</a></li>
                <li><a href='/category/mac'>Mac</a></li>
                <li><a href='/category/apple-watch'>Apple Watch</a></li>
                <li><a href='/category/ipad'>IPad</a></li>
                <li><a href='/category/airpods'>Airpods</a></li>
                <li><a href='/category/gadzheti'>Гаджети</a></li>
                <li><a href='/category/ipod'>Акустика</a></li>
                <li><a href='/category/aksesuari'>Аксесуари</a></li>
                <li><a href='/category/used'>Вживана техніка</a></li>
            </ul>
        </div>
    );
}

export default HeaderMainNav;
