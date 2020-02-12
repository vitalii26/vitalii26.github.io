import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import icons from '../../fonts/sprite.svg';


const Footer = () => {

    const FooterMenuItems = [
        { href: '/about', text: 'О нас'},
        { href: '/news', text: 'Новости'},
        { href: '/testimonials', text: 'Отзывы'},
        { href: '/delivery', text: 'Доставка'},
        { href: '/contacts', text: 'Контакты'}
    ]

    const FooterSocial = [
        { href: 'https://www.facebook.com/', svgId: 'facebook'},
        { href: 'https://www.instagram.com/', svgId: 'instagram'},
        { href: 'https://www.pinterest.com/', svgId: 'pinterest'},
        { href: 'https://www.twitter.com/', svgId: 'twitter'},
    ]

    return (
        <div className="p__footer">
            <div className="row">
                <div className="col-12 d-flex justify-content-center mb-3">
                    <ul className="p__footer-social">
                        {FooterSocial.map((el) => {
                            return (
                                <li className="p__footer-social-item"
                                 key={el.svgId + Math.random()}>
                                    <a href={el.href}
                                      rel="noopener noreferrer"
                                       target="_blank"
                                       className="p__footer-social-link">
                                        <svg className="p__footer-logo" xmlns="http://www.w3.org/2000/svg">
                                            <use xlinkHref={`${icons}#${el.svgId}`}></use>
                                        </svg>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-12  d-flex justify-content-center">
                    <ul className="p__footer-menu">
                        {FooterMenuItems.map((el) => {
                            return (
                                <li className="p__footer-menu-item" key={el.text + Math.random()}>
                                    <Link to={el.href} className="p__footer-menu-link">{el.text}</Link>
                                </li>
                            )
                        })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;