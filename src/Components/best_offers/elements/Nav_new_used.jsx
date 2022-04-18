import React from 'react';
import '../best_offers.scss'

function NavNewUsed() {
    return (
        <ul className='best-offers__nav-new-used'>
            <li className='nav-new-used__item'>
                <a className='nav-new-used__link active_new-used' href='/'>Нові</a>
            </li>
            <li className='nav-new-used__item'>
                <a className='nav-new-used__link ' href='/'>Б/У</a>
            </li>
        </ul>
    );
}

export default NavNewUsed;