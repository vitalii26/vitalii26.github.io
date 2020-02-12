import React, {useContext} from 'react';
import icons from '../../../fonts/sprite.svg';
import {Link} from 'react-router-dom';
import {CartContext} from '../../../context/cart-context/CartContext';
import './CartLogo.scss';

const CartLogo = () => {

    const {items, totalPrice, totalQuantity} = useContext(CartContext);
    
    return (
        <Link to='/cart' className="p__header-cart">
            <div className="p__header-cart-price">
                <span className="p__header-cart-currency">&#8372;</span>
                <span className="p__header-cart-money">{totalPrice(items)}</span>
            </div>
            <span className="p__header-cart-amount">{totalQuantity(items)}</span>
                <svg className="p__header-cart-logo" xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref={`${icons}#cart`}></use>
                </svg>

        </Link>
    )
}

export default CartLogo;