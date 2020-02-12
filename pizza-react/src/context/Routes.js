import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Pizza from '../pages/pizza';
import PizzaDetail from '../pages/pizza/pizza-detail/PizzaDetail';
import Salads from '../pages/salads';
import Deserts from '../pages/deserts';
import Beverages from '../pages/beverages';
import Sale from '../pages/sale';
import Cart from '../pages/cart';
import About from '../pages/about';
import News from '../pages/news';
import Testimonials from '../pages/testimonials';
import Contacts from '../pages/contacts';
import Delivery from '../pages/delivery';
import Home from '../pages/home';


const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/pizza" exact component={Pizza}/>
            <Route path="/pizza/:id?" component={PizzaDetail}/>
            <Route path="/salads" component={Salads}/>
            <Route path="/deserts" component={Deserts}/>
            <Route path="/beverages" component={Beverages}/>
            <Route path="/sale" component={Sale}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/about" component={About}/>
            <Route path="/news" component={News}/>
            <Route path="/testimonials" component={Testimonials}/>
            <Route path="/contacts" component={Contacts}/>
            <Route path="/delivery" component={Delivery}/>
            <Redirect to="/"/>
        </Switch>
    )
}

export default Routes;
