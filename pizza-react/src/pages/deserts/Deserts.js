import React from 'react';
import './Deserts.scss';
import ProductItem from '../../components/product-item/ProductItem';
import TitleItem from '../../components/title-item/TitleItem';

const Deserts = (props) => {
  const cls = [
    'p__deserts'
  ]
  if (props.classList) {
    cls.push(' home');
  }
  return (
    <div className={cls.join('')}>
      <div className="container">
          <TitleItem>Десерты</TitleItem>
        <div className="row" id="saladsRow">
            <ProductItem category="deserts"/>
          </div>
      </div>
    </div>    
  )  
}

export default Deserts;