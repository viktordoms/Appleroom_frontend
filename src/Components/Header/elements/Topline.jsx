import React from 'react';
import {BsSearch} from "react-icons/bs";
import {Link} from "react-router-dom"

function Topline() {
    return (
        <div className='header__topline d-flex justify-content_center align-items_center'>
            <div className='container'>
                <div className='d-flex align-items_center justify-content_center'>
                    <div className='topline_link_left d-inline_flex'>
                        <Link to="/news">Новини та статті</Link>
                        <Link to="/contact">Контакти</Link>
                        <Link to="/payment_delivery">Оплата та доставка</Link>
                        <Link to="/repair_service">Ремонт та сервіс</Link>
                    </div>
                    <div className='topline_search d-inline_flex justify-content_center align-items_center'>
                        <BsSearch className='bs-search'/>
                        <Link to='/search'>Пошук</Link>
                    </div>
                    <div className='topline_link_right d-inline_flex'>
                        <Link to="/register">Реєстрація</Link>
                        <Link to="/login">Вхід</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topline;