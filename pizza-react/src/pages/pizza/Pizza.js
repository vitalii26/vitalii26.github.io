import React from 'react';
import './Pizza.scss';
import ProductItem from '../../components/product-item/ProductItem';
import TitleItem from '../../components/title-item/TitleItem';

const Pizza = (props) => {
  const cls = [
    'p__pizza'
  ]
  if (props.classList) {
    cls.push(' home');
  }
  return (
    <div className={cls.join('')}>
      <div className="container">
          <TitleItem>Пицца</TitleItem>
        <div className="row" id="pizzaRow">
            <ProductItem
            category="pizza"
            />
          </div>
      </div>
    </div>
     
  )  
}

export default Pizza;