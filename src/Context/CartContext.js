import React, {useState} from 'react';

const CartContext = React.createContext();

export const CartContextProvider = ({children}) => {

    const [Products, setProducts] = useState([])

    const addItem = (item, quantity) => {

        let temp = {
            name: item.name,
            price: item.price,
            img: item.img,
            id: item.id,
            quantity: quantity
        }

        if(!isInCart(item.id))
        {
            setProducts([...Products, temp])
        }
        else {
            temp = Products.find(element => element.id === item.id)

            temp.quantity = temp.quantity + quantity

            let productsTemp = Products.filter((element => element.id !== item.id))

            setProducts([...productsTemp, temp])
        }
 
    }

    const isInCart = (id) => {

        return Products.some(element => element.id === id);
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
    const getQuantitybyId = (id) => {

        if(isInCart(id))
        {
            let temp = Products.find(element => element.id === id)

            return temp.quantity;
        }
        else
        {
            return false;
        }
    }
   
    return (
        <CartContext.Provider value={{addItem, removeItem, clear, all, getQuantitybyId, Products}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;

