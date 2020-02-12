import React from 'react';
import {NavLink} from 'react-router-dom';


const MenuRightItem = (props) => {

    const MenuRightItems = [
        { href: '/about', text: 'О пиццерии'},
        { href: '/news', text: 'Новости'},
        { href: '/testimonials', text: 'Отзывы'},
        { href: '/delivery', text: 'Условия доставки'},
        { href: '/contacts', text: 'Контакты'}
    ]

    return (
        MenuRightItems.map((el) => {
            return (
                <li key={el.href} className="p__menu-right-additem">
					<NavLink to={el.href} className="p__menu-right-addlink" onClick={props.onClick}>
						{el.text}
					</NavLink>
				</li>
            )
        })
    )
}
export default MenuRightItem;