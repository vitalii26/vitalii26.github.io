import React from 'react';
import './MenuBackdrop.scss';


const MenuBackdrop = props => {
    return (
        <div className="p__menu-backdrop"
        onClick={props.onClick}
        />
    )
}

export default MenuBackdrop;