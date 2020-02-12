import React from 'react';
import './Menu.scss';
import { Link } from 'react-router-dom';

const News = (props) => {
  const cls = [
    'p__news'
  ]
  if (props.classList) {
    cls.push(' home');
  }
  return (
    <div className={cls.join('')}>
      <div className="container">
      <div className="row justify-content-center">
            <h2 className="p__news-title">Наше Меню</h2>
          </div>
        <div className="p__news-inner">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 p-lg-0 py-3 py-xl-0">
              <Link to="/pizza" className="p__news-card">
                <div className="p__news-img-wrap">
                  <img src="./images/pizza/capricciosa.jpg" alt="pizza" />
                </div>
                <div className="p__news-content">
                  <h4 className="p__news-card-title">пицца</h4>
                  <p className="p__news-text">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.</p>
                  <span className="p__news-price">От 99.99 грн.</span>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6 col-lg-3 p-lg-0 py-3 py-xl-0">
              <Link  to="/salads" className="p__news-card reverse">
                <div className="p__news-content">
                  <h4 className="p__news-card-title">салаты</h4>
                  <p className="p__news-text">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.</p>
                  <span className="p__news-price">От 78.99 грн.</span>
                </div>
                <div className="p__news-img-wrap">
                  <img src="./images/salads/feta.jpg" alt="salads" />
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6 col-lg-3 p-lg-0 py-3 py-xl-0">
              <Link  to="/deserts" className="p__news-card">
                <div className="p__news-img-wrap">
                  <img src="./images/pancakes.jpg" alt="deserts" />
                </div>
                <div className="p__news-content">
                  <h4 className="p__news-card-title">десерты</h4>
                  <p className="p__news-text">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.</p>
                  <span className="p__news-price">От 34.99 грн.</span>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6 col-lg-3 p-lg-0 py-3 py-xl-0">
              <Link  to="/beverages" className="p__news-card reverse">
                <div className="p__news-content">
                  <h4 className="p__news-card-title">напитки</h4>
                  <p className="p__news-text">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.</p>
                  <span className="p__news-price">От 19.99 грн.</span>
                </div>
                <div className="p__news-img-wrap">
                  <img src="./images/drinks.jpg" alt="fanta" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )  
}

export default News;