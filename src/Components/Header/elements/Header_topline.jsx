import React from 'react';
import {BsSearch} from "react-icons/bs";

function HeaderTopline() {
    return (
        <div className='header__topline d-flex justify-content_center align-items_center'>
            <div className='container'>
                <div className='d-flex align-items_center justify-content_center'>
                    <div className='topline_link_left d-inline_flex'>
                        <a href="/news">Новини та статті</a>
                        <a href="/contact">Контакти</a>
                        <a href="/payment_delivery">Оплата та доставка</a>
                        <a href="/repair_service">Ремонт та сервіс</a>
                    </div>
                    <div className='topline_search d-inline_flex justify-content_center align-items_center'>
                        <BsSearch className='bs-search'/>
                        <a href='/search'>Пошук</a>
                    </div>
                    <div className='topline_link_right d-inline_flex'>
                        <a href="/register">Реєстрація</a>
                        <a href="/login">Вхід</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderTopline;