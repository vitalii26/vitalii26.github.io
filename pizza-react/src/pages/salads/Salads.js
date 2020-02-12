import React from 'react';
import './Salads.scss';
import ProductItem from '../../components/product-item/ProductItem';
import TitleItem from '../../components/title-item/TitleItem';

const Salads = (prop) => {
  const cls = [
    'p__salads'
  ]
  if (prop.classList) {
    cls.push(' home');
  }
  return (
    <div className={cls.join('')}>
      <div className="container">
          <TitleItem>Салаты</TitleItem>
        <div className="row" id="saladsRow">
            <ProductItem category="salads"/>
          </div>
      </div>
    </div>    
  )  
}

export default Salads;