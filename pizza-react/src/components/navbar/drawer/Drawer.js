import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import './Drawer.scss';
import MenuBackdrop from '../MenuBackdrop';
import HeaderBottomItem from '../../header/header-bottom-item';
import MenuRightItem from './menu-right-item';

class Drawer extends Component {
    render() {
        const cls = [
            'p__menu-right'
        ]
        if (this.props.isOpen) {
            cls.push('open');
        } 
        return (
			<Fragment>
				<nav className={cls.join(' ')}>
					<Link to="/" className="p__menu-right-reservation">Резервировать стол</Link>
					<ul className="p__menu-right-list">
						<HeaderBottomItem classList="menu-right" onClick={this.props.onClose}/>
					</ul>
					<ul className="p__menu-right-addlist">
						<MenuRightItem onClick={this.props.onClose}/>
						
					</ul>
				</nav>
				{this.props.isOpen ? <MenuBackdrop onClick={this.props.onClose}/> : null}
			</Fragment>
        )
    }
}

export default Drawer;