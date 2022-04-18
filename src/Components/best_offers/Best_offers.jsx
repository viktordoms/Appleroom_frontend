import React from 'react';
import './best_offers.scss'
import NavNewUsed from "./elements/Nav_new_used";
import NavCategory from "./elements/Nav_category";
import Product from "./elements/Product";

function BestOffers() {
    return (
        <div className='best-offers__block'>
            <div className='best-offers__container'>
                <div className='best-offers__box' >
                    <div className='best-offers__title'>
                        <span>Найкращі пропозиції на сьогодні</span>
                    </div>
                    <NavNewUsed/>
                    <NavCategory/>
                    <Product/>
                </div>
            </div>

        </div>
    );
}

export default BestOffers;