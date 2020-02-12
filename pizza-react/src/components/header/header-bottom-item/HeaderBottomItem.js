import React from 'react';
import {NavLink} from 'react-router-dom';
import './HeaderBottomItem.scss';
import icons from '../../../fonts/sprite.svg';

const HeaderBottomItem = (props) => {
    const headerBottomLinks = [
        { href: '/pizza', text: 'Пицца', svgHref: 'menu1' },
        { href: '/salads', text: 'Салаты', svgHref: 'menu2' },
        { href: '/deserts', text: 'Десерты', svgHref: 'menu3' },
        { href: '/beverages', text: 'Напитки', svgHref: 'menu4' },
        { href: '/sale', text: 'Акции', svgHref: 'menu5' }
    ]


    return (
        headerBottomLinks.map((el) => {
            return (
                <li key={el.svgHref} className={`p__${props.classList}-item`} onClick={props.onClick}>
                    <NavLink to={el.href} className={`p__${props.classList}-link`}>
                        <svg className={`p__${props.classList}-logo`} xmlns="http://www.w3.org/2000/svg">
                            <use xlinkHref={`${icons}#${el.svgHref}`}></use>
                        </svg>
                        <span className={`p__${props.classList}-link-text`}>{el.text}</span>
                    </NavLink>
                </li >
            )
        })
    )
}

export default HeaderBottomItem;