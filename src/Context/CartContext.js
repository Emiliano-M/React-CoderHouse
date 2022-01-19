import React, {useState} from 'react';

const CartContext = React.createContext();

export const CartContextProvider = ({children}) => {

    const [Products, setProducts] = useState([])

    const addItem = (item, quantity) => {

        let index = isInCart(item.id)

        if(index >= 0)
        {
            Products[index].quantity = Products[index].quantity + quantity
            Products[index].totalprice = Products[index].price * Products[index].quantity
        }

        if(index < 0) 
        {
            let Temp = {
                name: item.name,
                price: item.price,
                img: item.img,
                id: item.id,
                quantity: quantity
            }

            setProducts([...Products, Temp])
        }
 
    }

    const isInCart = (id) => {

        return Products.findIndex(element => element.id === id);
    }

    const removeItem = (itemId) => {

        setProducts(Products.filter(element => element.id !== itemId))

    }

    const all = () => {

        var all = {price: 0, quantity: 0}

        Products.forEach( Product => {
            all.price = all.price + Product.price * Product.quantity
            all.quantity = all.quantity + Product.quantity
        })
        
        return all;
    }

    const clear = () => {

        setProducts([])
        
    }
   
    return (
        <CartContext.Provider value={{addItem, removeItem, clear, all, Products}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;

