import React from 'react';
import './PizzaDetail.scss';
import { Redirect } from 'react-router-dom';
import { foods } from '../../../data/FoodData';

const PizzaDetail = ({match}) => {
    const result = foods.filter(item => (item.id === +match.params.id && item.category === 'pizza'));
    const item = result[0];
    return (
        <div className="p__pizza-detail">
            <div className="container">
            {item === undefined ?
            <Redirect to="/"/> :
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="p__pizza-detail-photo">
                            <img src={item.img_url} alt={item.title} className="p__pizza-detail-img"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <h3 className="p__pizza-detail-name">{item.title}</h3>
                        <p className="p__pizza-detail-description">{item.description}</p>
                        <div className="p__pizza-detail-wrap">
                            <div className="p__pizza-detail-left">
                                
                            </div>
                        </div>
                    </div>
                </div>}
             </div>
        </div>
    )
}


export default PizzaDetail;