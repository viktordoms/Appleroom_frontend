import React from 'react';
import {BsFillBasket3Fill} from "react-icons/bs";

import CityPhone from "./City_phone";
import {Link} from 'react-router-dom'

function Main() {
    return (
        <div className='header__main d-flex justify-content_center align-items_center'>
            <div className='container'>
                <div className='d-flex align-items_center justify-content_center'>
                    <div className='main__logo d-flex align-items_center justify-content_center'>
                        <Link to='/'>
                            <img
                                src='images/logo.png'
                                alt=''/>
                        </Link>
                    </div>
                    <CityPhone/>
                    <div className='main__basket d-flex align-items_center justify-content_center'>
                        <div className='basket_box'>
                            <BsFillBasket3Fill className='icon_basket'/>
                        </div>
                    </div>
                    <div className='main__lang_select d-flex align-items_center justify-content_center'>
                        <span>UA</span>
                        |
                        <Link to='/eng' title='English'>ENG</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;