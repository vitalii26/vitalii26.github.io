import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Cart.scss';
import { CartContext } from '../../context/cart-context/CartContext';
import TitleItem from '../../components/title-item/TitleItem';
import icons from '../../fonts/sprite.svg';

const Cart = () => {
  const {items, totalPrice, deleteItemHandler, quantityHandler} = useContext(CartContext);
  
    return (
      <div className="p__cart">
        <div className="container">
           <TitleItem>Оформить заказ</TitleItem>
           {items.length !== 0 ? 
            <div className="row border d-none d-lg-flex">
            <div className="col-7 text-center">Товар</div>
            <div className="col-2">Количество</div>
            <div className="col-3 text-center">Сумма</div>
          </div> :
            <h4 className="text-center mb-5">Корзина пуста</h4>
          }
            
        {items.map(item => (
          <div key={item.title + Math.random()} className="row mb-3 d-flex justify-contect-center border">
            <div className="col-12">
              <div className="p__cart-item">
                <div className="p__cart-image-wrapper">
                  <img className="p__cart-image" src={item.img_url} alt={item.title} />
                </div>
                <div className="p__cart-wrapper">
                  <div className="p__cart-descripton-wrapper">
                    <h4 className="p__cart-item-title">{item.title}</h4>
                    <p className="p__cart-item-description">{item.description}</p>
                  </div>
                  <div className="p__cart-item-bottom-wrapper">
                    <div className="p__cart-item-quantity-wrapper">
                      <button
                      onClick={() => quantityHandler(item.id, 'sub')}
                      className="p__cart-item-quantity-sub">-</button>
                      <span className="p__cart-item-quantity">{item.quantity}</span>
                      <button
                      onClick={() => quantityHandler(item.id, 'add')}
                      className="p__cart-item-quantity-add">+</button>
                    </div>
                    <span className="p__cart-item-price">
                      {(item.quantity * item.price).toFixed(2)}
                      </span>
                  </div>
                  <svg className="p__cart-item-delete"
                   xmlns="http://www.w3.org/2000/svg"
                   onClick={() => deleteItemHandler(items, item.id)}
                   >
                    <use xlinkHref={`${icons}#times`}
                     className="p__cart-item-delete-item"
                    ></use>
                </svg>

                </div>
              </div>
            </div>
          </div>

        ))}
          {items.length > 0 ? 
          <div className="row d-flex justify-content-end mb-3">
            <span className="p__cart-sum">{`Сумма покупки: ${totalPrice(items)} грн`}</span>
            </div> 
            : null}
          {items.length > 0 ?
          <div className="row justify-content-end">
            <Link className="p__cart-btn mr-2" to="/pizza/">Продолжить покупки</Link>
            <Link className="p__cart-btn success">Сделать заказ</Link>
          </div> :
          <div className="row justify-content-center">
            <Link className="p__cart-btn" to="/pizza/">Перейти к покупкам</Link>
          </div>
          }
        </div>
      </div>   
  ) 
}

export default Cart;