import React from 'react';
import './MainCarousel.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const MainCarousel = () => {
    return (
        <Carousel showStatus={false}
        showThumbs={false}
        autoPlay={true}
        interval={3000}
        infiniteLoop
        className="p__main-carousel">
          <div className="p__main-carousel-item">
            <img src="../images/pizza1.jpg" alt="pizza1"/>
            <h1 className="p__main-carousel-title">Foodi</h1>
            <p className="p__main-carousel-text">Лучшая пицца</p>
          </div>
          <div className="p__main-carousel-item">
            <img src="../images/pizza2.jpg" alt="pizza2"/>
            <h1 className="p__main-carousel-title">Foodi</h1>
            <p className="p__main-carousel-text">Доставка 24/7</p>
          </div>
          <div className="p__main-carousel-item">
            <img src="../images/pizza3.jpg" alt="pizza3"/>
            <h1 className="p__main-carousel-title">Foodi</h1>
            <p className="p__main-carousel-text">Вкуснейшая пицца</p>
          </div>
          <div className="p__main-carousel-item">
            <img src="../images/pizza4.jpg" alt="pizza4"/>
          </div>
        </Carousel>
    )
}

export default MainCarousel;
