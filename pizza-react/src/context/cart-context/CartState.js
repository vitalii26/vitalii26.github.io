import React, {useState, useEffect} from 'react';
import {CartContext} from './CartContext';


export const CartState = ({children}) => {
    const [items, setItems] = useState([]);
    const quantitiesItems = itemsWithQuantities(items);

    useEffect(() => {
        const raw = localStorage.getItem('items') || [];
        setItems(JSON.parse(raw));
    }, [])

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(itemsWithQuantities(quantitiesItems)));
    }, [quantitiesItems]);

    const addToCart = (item) => {
        setItems(prevState => [...prevState, item]);
    }

    function itemsWithQuantities(items) {
        return items.reduce((acc, item) => {
            const found = acc.find(_item => _item.id === item.id)
            if(found) {
                found.quantity++
            } else {
                acc.push({
                   quantity: 1,
                   ...item
                })
            }
            return acc;
        }, [])
    }
    const totalPrice = (items) => {
        return items.reduce((acc, item) => acc + item.quantity * item.price, 0.0).toFixed(2);
    }

    const totalQuantity = (items) => {
        return items.reduce((acc, item) => acc + item.quantity, 0).toFixed();
    }

    const deleteItemHandler = (items, id) => {
        const result = items.filter(item => item.id !== id);
        setItems([...result]);
    }

    const quantityHandler = (id, type) => {
            const newItems = [...itemsWithQuantities(items)];
            const index = newItems.findIndex(_item => id === _item.id);
            if (type === 'add') {
                newItems[index].quantity++;
                setItems(newItems);
            } 
            if (type === 'sub') {
                if (newItems[index].quantity > 1) {
                    newItems[index].quantity--;
                    setItems(newItems);
                } else {
                    const newItems2 = [...newItems.splice(0, index),
                    ...newItems.splice(index + 1)]
                    setItems(newItems2);
                }
            }
    }



    return (
        <CartContext.Provider
            value={{
                items: quantitiesItems,
                addToCart,
                totalPrice,
                totalQuantity,
                deleteItemHandler,
                quantityHandler
            }}>
            {children}
        </CartContext.Provider>
    )
}