import React from 'react';
import './About.scss';
import TitleItem from '../../components/title-item/TitleItem';

const About = (props) => {
  const cls = [
    'p__about'
  ]
  if (props.classList) {
    cls.push(' home');
  }
  return (
      <div className={cls.join('')}>
        <div className="container">
        <TitleItem>О ресторане</TitleItem>
        <div className="p__about-inner">
          <div className="row">
            <div className="col-12 col-lg-5 p-lg-0">
              <div className="p__about-reservation-top">
                <h3  className="p__about-reservation-title">Резервирование</h3>
                <p className="p__about-reservation-description">
                  Зарезервируйте стол в нашем ресторане.
                  Возможно забронировать в любое время.
                </p>
                <button className="p__about-reservation-button">
                  Зарезервировать стол
                </button>
              </div>
              <div className="p__about-reservation-bottom">
                <img src="./images/about1.jpg" alt="reservation"/>
              </div>
            </div>
            <div className="col-12 col-lg-7 p-lg-0">
              <div className="p__about-top">
                <img src="./images/about2.jpg" alt="about"/>
              </div>
              <div className="p__about-bottom">
                <h3 className="p__about-bottom-title">О ресторане</h3>
                <p className="p__about-bottom-text">Во-первых, доставка пиццы в Кременчуге использует только свежие и самые вкусные продукты. Быстрая доставка пиццы — второй наш козырь и показатель репутации среди клиентов и конкурентов.
                Пицца на дровах — это необычайный вкус теста и нежный расплавленный сыр сверху. Ее просто необходимо попробовать, описать этот вкус словам почти нереально.
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>    
  )  
}

export default About;