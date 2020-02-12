import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderTopItem.scss';
import icons from '../../../fonts/sprite.svg';

const HeaderTopItem = () => {
    const headerTopLinks = [
        { href: '/delivery', text: 'Бесплатная доставка 24/7', svgHref: 'moto' },
        { href: '/contacts', text: 'Кременчуг, Украина', svgHref: 'map' }
    ]
    return (
        headerTopLinks.map((el) => {
            return (
                <li key={el.svgHref} className="p__header-contact-item">
                    <Link className="p__header-contact-link" to={el.href}>
                        <svg className="p__header-nav-top-logo" xmlns="http://www.w3.org/2000/svg">
                            <use xlinkHref={`${icons}#${el.svgHref}`}></use>
                        </svg>
                        <span className="p__header-contact-text">{el.text}</span>
                    </Link>
                </li>
            )
        })

    )
}
export default HeaderTopItem;