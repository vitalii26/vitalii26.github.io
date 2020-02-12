import React from 'react';
import './MenuToggle.scss';

const MenuToggle = props => {

    const cls = [
        'p__menu-icon__burger',
    ]
    if (props.isOpen) {
        cls.push(' toggle')
    } else {
        cls.push('');
    }
    
    return (
        <div className={cls.join('')}
        onClick={props.onToggle}
        >
            <div className="p__menu-icon__line line1"></div>
            <div className="p__menu-icon__line line2"></div>
            <div className="p__menu-icon__line line3"></div>
        </div>
    )
}

export default MenuToggle;