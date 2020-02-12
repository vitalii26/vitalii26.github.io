import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';
import HeaderTopItem from './header-top-item';
import HeaderBottomItem from './header-bottom-item';
import MenuToggle from '../navbar/menu-toggle';
import Drawer from '../navbar/drawer';
import CartLogo from './cart-logo';
import icons from '../../fonts/sprite.svg';

class Header extends Component {

    state = {
        menu: false
    }

    toggleMenuHandler = () => {
      this.setState({
          menu: !this.state.menu
      })  
    }
    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    }
    render () {
    return (
    <Fragment>
    <div className="p__header">
        <div className="container">
            <ul className="p__header-top">
                <li className="p__header-contact-item">
                    <a className="p__header-contact-link" href="tel:+380671234567">
                        <svg className="p__header-nav-top-logo" xmlns="http://www.w3.org/2000/svg">
                            <use xlinkHref={`${icons}#phone`}></use>
                        </svg>
                        <span className="p__header-contact-text">+380671234567</span>
                    </a>
                </li>
                <HeaderTopItem/>
            </ul > 
            <div className="p__header-bottom">
                <div className="p__header-bottom-left">
                    <Link to="/" className="p__header-logo">Foodi</Link>
                    <nav className="p__header-nav">
                        <ul className="p__header-nav-list">
                            <HeaderBottomItem classList="header-nav"/>
                        </ul>
                    </nav>
                </div>
                <div className="p__header-bottom-right">
                    <CartLogo/>
                    <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                    />
                    
                </div>
            </div>
            
        </div >
    </div >
    <Drawer
        isOpen={this.state.menu}
        onClose={this.menuCloseHandler}
    /> 
        
    </Fragment>
    )
}
}

export default Header;