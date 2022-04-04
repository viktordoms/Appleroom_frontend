import React from 'react';
import {IoIosArrowDropdown} from "react-icons/io";

function HeaderCityPhone() {
    return (
        <div className='main__phone d-flex align-items_center justify-content_center'>
            <div className='main__city_select d-inline_flex align-items_center justify-content_center'>
                <span>Львів</span>
                <IoIosArrowDropdown className='icon_drop_down'/>
            </div>
            <div className='main__phone_item'>
                <a href='tel:+380 63 1234567'>+380 63 1234567</a>
            </div>
            <div className='main__phone_item'>
                <a href='tel:+380 97 1234567'>+380 97 1234567</a>
            </div>
            <div className='main__phone_item'>
                <a href='tel:+380 50 1234567'>+380 50 1234567</a>
            </div>
        </div>
    );
}

export default HeaderCityPhone;