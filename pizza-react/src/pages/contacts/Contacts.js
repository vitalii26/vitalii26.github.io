import React from 'react';
import './Contacts.scss';
import TitleItem from '../../components/title-item/TitleItem';
import icons from '../../fonts/sprite.svg';
import GoogleMap from '../../components/google-map/GoogleMap';

const Contacts = (props) => {

  const cls = [
    'p__contacts'
  ]
  if (props.classList) {
    cls.push(' home');
  }
  return (
    <div className={cls.join('')}>
      <div className="container">
        <div className="p__contacts-inner">
          <div className="row justify-content-center">
            <TitleItem>контакты</TitleItem>
          </div>
          <div className="row  mb-4">
            <div className="col-12 col-md-6 d-none d-md-flex justify-content-center">
              <div className="p__contacts-item-inner">
                <h5 className="p__contacts-city"><svg className="p__contacts-logo" xmlns="http://www.w3.org/2000/svg">
                  <use xlinkHref={`${icons}#map`}></use>
                </svg>Кременчуг</h5>
                <address className="p__contacts-address">
                  ул. Уличная дом 12,
                  рядом с ТЦ "Торговый"
                  </address>
                <a href="tel:+380671234567" className="p__contacts-tel"><svg className="p__contacts-logo" xmlns="http://www.w3.org/2000/svg">
                  <use xlinkHref={`${icons}#phone`}></use>
                </svg>+380671234567</a>
              </div>
            </div>
            <div className="col-12 col-md-6 justify-content-center">
              <div className="p__contacts-item-inner">
                <h5 className="p__contacts-city">
                  <svg className="p__contacts-logo" xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref={`${icons}#map`}></use>
                  </svg>Кременчуг</h5>
                <address className="p__contacts-address">
                  ул. Уличная дом 12,
                  рядом с ТЦ "Торговый"
                  </address>
                <a href="tel:+380671234567" className="p__contacts-tel">
                  <svg className="p__contacts-logo" xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref={`${icons}#phone`}></use>
                  </svg>+380671234567</a>
              </div>
            </div>
          </div>
          <div className="col-12">
            <GoogleMap></GoogleMap>
          </div>
        </div>
        <div className="p__contacts-mail">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h4 className="p__contacts-mail-title">Подпишись на нашу рассылку</h4>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <form className="col-12 col-lg-8 d-flex justify-content-between">
              <input className="p__contacts-input"
                placeholder="Введите свой email"
                type="email" />
              <button className="p__contacts-button">Подтвердить</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )  
}

export default Contacts;