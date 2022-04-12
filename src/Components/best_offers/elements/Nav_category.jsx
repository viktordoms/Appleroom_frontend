import React from 'react';
import '../best_offers.scss'

function NavCategory() {
    return (
        <ul className='best-offers__nav-category'>
            <li className='nav-category__item'>
                <a className='nav-category__link active_category' href='/'>IPhone</a>
            </li>
            <li className='nav-category__item'>
                <a className='nav-category__link' href='/'>IPad</a>
            </li>
            <li className='nav-category__item'>
                <a className='nav-category__link' href='/'>Watch</a>
            </li>
            <li className='nav-category__item'>
                <a className='nav-category__link' href='/'>Mac</a>
            </li>
        </ul>
    );
}

export default NavCategory;