import React, { useContext } from 'react';
import './ProductItem.scss';
import { foods } from '../../data/FoodData';
import { CartContext } from '../../context/cart-context/CartContext';
import { withRouter } from 'react-router-dom';

const ProductItem = (props) => {
    const { addToCart } = useContext(CartContext);

    return (
    foods.filter(food => food.category === props.category).map((el) => {
    return (
        <div key={el.id} className="col-12 col-md-6 col-lg-4 py-3">
            <div className="p__item-inner">
            {el.category === 'pizza' ? 
                <div className="p__item-photo-wrap open"
                    element={el}
                    onClick={
                        () => props.history.push(`/pizza/${el.id}`)
                    }>
                    <img src={el.img_url} alt={el.title} className="p__item-photo" />
                    <div className="p__item-description__wrapper">
                        <p className="p__item-title"
                        >{el.title}</p>
                        <p className="p__item-weight">
                            {el.weight}
                        </p>
                        <p className="p__item-description">
                            {el.description}
                        </p>
                            <p className="p__item-size">
                                {`Диаметр: ${el.size} см`}
                            </p>
                    </div>
                    </div> :
                     <div className="p__item-photo-wrap">
                         <img src={el.img_url} alt={el.title} className="p__item-photo" />
                    <div className="p__item-description__wrapper">
                        <p className="p__item-title"
                        >{el.title}</p>
                        <p className="p__item-weight">{el.weight}</p>
                        <p className="p__item-description">{el.description}</p>
                    </div>
                    </div>

                    }
                
                <span className="p__item-price">{`${el.price} грн`}</span>
                <button className="p__item-btn"
                    onClick={() => addToCart(el)}>В коробку</button>
            </div>
        </div>
    )
    })
    )

}

export default withRouter(ProductItem);