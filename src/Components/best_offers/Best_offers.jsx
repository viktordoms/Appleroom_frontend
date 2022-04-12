import React from 'react';
import './best_offers.scss'

function BestOffers() {
    return (
        <div className='best-offers__block'>
            <div className='best-offers__container'>
                <div className='best-offers__box' >
                    <div className='best-offers__title'>
                        Найкращі пропозиції на сьогодні
                    </div>
                    <ul className='best-offers__nav-new-by'>
                        <li className='nav-new-by__item'>
                            <a className='nav-new-by__link active_new-by' href='/best_today/new'>Нові</a>
                        </li>
                        <li className='nav-new-by__item'>
                            <a className='nav-new-by__link ' href='/best_today/by'>Б/У</a>
                        </li>
                    </ul>
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
                    <div className='best-offers__product'>
                        <div className='product_container' id='best__new-iphone'>
                            <div className='product_card'>
                                <div className='product_card__image'>
                                    <img src='images/product_iphone/iPhone 11 64GB White.webp' alt=''/>
                                </div>
                                <div className='product_card__name'>
                                    <a href='/'>Apple iPhone 11 64GB White</a>
                                </div>
                                <div className='product_card__meta'>В наявності</div>
                                <div className='product_card__price'>
                                    <span className='price_usd'>$600</span>
                                    <span className='price_uan'>19900 грн</span>
                                </div>
                            </div>
                            <div className='product_card'>
                                <div className='product_card__image'>
                                    <img src='images/product_iphone/iPhone 13 Pro Max 128GB Gold (MLL83).webp' alt=''/>
                                </div>
                                <div className='product_card__name'>
                                    <a href='/'>Apple iPhone 13 Pro Max 128GB Gold (MLL83)</a>
                                    </div>
                                <div className='product_card__meta'>В наявності</div>
                                <div className='product_card__price'>
                                    <span className='price_usd'>$1200</span>
                                    <span className='price_uan'>32000 грн</span>
                                </div>
                            </div>
                            <div className='product_card'>
                                <div className='product_card__image'>
                                    <img src='images/product_iphone/iPhone 13 Pro 128GB Sierra Blue (MLVD3).webp' alt=''/>
                                </div>
                                <div className='product_card__name'>
                                    <a href='/'>Apple iPhone 13 Pro 128GB Sierra Blue (MLVD3)</a>
                                </div>
                                <div className='product_card__meta'>В наявності</div>
                                <div className='product_card__price'>
                                    <span className='price_usd'>$1200</span>
                                    <span className='price_uan'>32000 грн</span>
                                </div>
                            </div>
                            <div className='product_card'>
                                <div className='product_card__image'>
                                    <img src='images/product_iphone/iPhone 13 128GB Blue (MLPK3).webp' alt=''/>
                                </div>
                                <div className='product_card__name'>
                                    <a href='/'>Apple iPhone 13 128GB Blue (MLPK3)</a>
                                    </div>
                                <div className='product_card__meta'>В наявності</div>
                                <div className='product_card__price'>
                                    <span className='price_usd'>$800</span>
                                    <span className='price_uan'>26000 грн</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default BestOffers;