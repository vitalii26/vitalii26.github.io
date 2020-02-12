import React from 'react';
import './MainCarousel.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../../images/pizza1.jpg';
import image2 from '../../images/pizza2.jpg';

const MainCarousel = () => {
    return (
        <Carousel showStatus={false}
        showThumbs={false}
        autoPlay={true}
        interval={3000}
        infiniteLoop
        className="p__main-carousel">
          <div className="p__main-carousel-item">
            <img src={image1} alt="pizza1"/>
          </div>
          <div className="p__main-carousel-item">
            <img src={image2} alt="pizza2"/>
          </div>
          <div className="p__main-carousel-item">
            <img src="../images/pizza3.jpg" alt="pizza3"/>
          </div>
          <div className="p__main-carousel-item">
            <img src="../images/pizza4.jpg" alt="pizza4"/>
          </div>
          <div className="p__main-carousel-item">
            <img src="../images/pizza5.jpg" alt="pizza5"/>
          </div>
          <div className="p__main-carousel-item">
            <img src="../images/pizza6.jpg" alt="pizza6"/>
          </div>
          <div className="p__main-carousel-item">
            <img src="../images/pizza7.jpg" alt="pizza7"/>
          </div>
          <div className="p__main-carousel-item">
            <img src="../images/pizza8.jpg" alt="pizza8"/>
          </div>
          <div className="p__main-carousel-item">
            <img src="../images/pizza9.jpg" alt="pizza9"/>
          </div>
          <div className="p__main-carousel-item">
            <img src="../images/pizza10.jpg" alt="pizza10"/>
          </div>
          <div className="p__main-carousel-item">
            <img src="img/pizza11.png" alt="pizza11"/>
          </div>
        </Carousel>
    )
}

export default MainCarousel;
