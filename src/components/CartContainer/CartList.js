import React, { useContext } from 'react';
import CartItem from './CartItem/CartItem';
import CartContext from '../../Context/CartContext';

const CartList = () => {

    const {Productos, costeTotal} = useContext(CartContext)

    console.log(costeTotal)

    return (

        <div>
            {Productos.map((e,i) => <CartItem Data={e} key={i}/>)}
            <div className="card bg-dark w-100 d-inline-block product mt-5">              
                <div className="card-body"> 
                    <p className="card-text mx-2 h5">Total: {costeTotal}</p>
                </div>
            </div>
        </div>
    )
}

export default CartList
