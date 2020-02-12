import React from 'react';
import './Beverages.scss';
import ProductItem from '../../components/product-item/ProductItem';
import TitleItem from '../../components/title-item/TitleItem';

const Beverages = (prop) => {
  const cls = [
    'p__beverages'
  ]
  if (prop.classList) {
    cls.push(' home');
  }
  return (
    <div className={cls.join('')}>
      <div className="container">
          <TitleItem>Напитки</TitleItem>
        <div className="row" id="saladsRow">
            <ProductItem category="beverages"/>
          </div>
      </div>
    </div>    
  )  
}

export default Beverages;