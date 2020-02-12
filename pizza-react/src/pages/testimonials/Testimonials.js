import React from 'react';
import './Testimonials.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TitleItem from '../../components/title-item/TitleItem';

const Testimonials = (props) => {

  const testimonials = [
    {name: 'Надежда', text: 'Это лучшая пицца в городе, невероятно вкусная. Очень много начинки, при этом идеально нарезана - чувствуется каждый ингредиент. Изумительное тесто с хрустящей корочкой. Спасибо вам:)'},
    {name: 'Алена', text: 'Мы пиццу заказываем редко, так что, может быть, сравнивать особо и не с кем, но нам очень понравилось. Все как заказывали, продукты свежие, оператор и доставка - четко сработано. Спасибо!'},
    {name: 'Алексей', text: 'Вчера заказывали Pizza. Очень вкусно! Спасибо огромное всем сотрудникам пиццерии. Рекомендую всем! Квалифицированые опператоры. Быстрая доставка. Предоставляют грантию на продукт, в виде чека за покупку'},
  ];
  const cls = [
    'p__testimonials'
  ]
  if (props.classList) {
    cls.push(' home');
  }
  return (
      <div className={cls.join('')}>
        <div className="container">
        <TitleItem>отзывы</TitleItem>
        <Carousel showStatus={false}
        showThumbs={false}
        autoPlay={true}
        interval={5000}
        showArrows={false}
        showIndicators={false}
        infiniteLoop
        className="row">
              {testimonials.map((el) => {
                return (
                  <div className="col-12 p-0"
                  key={el.name + Math.random()}>
                    <div className="p__testimonials-item">
                      <h4 className="p__testimonials-item-name">{el.name}<span className="p__testimonials-item-date">21.12.2019</span></h4>
                <p className="p__testimonials-item-text">{el.text}</p>
                    </div>
                  </div>
                )
              })}
        </Carousel>
        </div>
      </div>    
  )  
}

export default Testimonials;