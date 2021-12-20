import React, {useState} from 'react';

const CartContext = React.createContext();

export const CartContextProvider = ({children}) => {

    const [Productos, setProductos] = useState([])
    const [totalProductos, setTotal] = useState(0)
    const [costeTotal, setCoste] = useState(0)

    const addItem = (item, quantity) => {

        setTotal(totalProductos + quantity)
        setCoste(costeTotal + (item.price * quantity))

        let index = isInCart(item.id)

        if(index >= 0)
        {
            Productos[index].quantity = Productos[index].quantity + quantity
            Productos[index].totalprice = Productos[index].price * Productos[index].quantity
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

            setProductos([...Productos, Temp])
        }
 
    }

    const isInCart = (id) => {

        return Productos.findIndex(element => element.id === id);
    }

    const removeItem = (itemId) => {

        setProductos(Productos.filter(element => element.id !== itemId))

        setTotal(totalProductos - (Productos.find(element => element.id === itemId)).quantity)
        setCoste(costeTotal - (Productos.find(element => element.id === itemId)).price)

        console.log(Productos, "REMOVED")
    }

    const clear = () => {
        setProductos([])
        setTotal(0)
        setCoste(0)
    }
   
    return (
        <CartContext.Provider value={{addItem, removeItem, clear, Productos, totalProductos, costeTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;

