import React, { useContext } from 'react';
import CartItem from './CartItem/CartItem';
import CartContext from '../../Context/CartContext';

const CartList = () => {

    const {Products, all} = useContext(CartContext)

    return (

        <div>
            {Products.map((e,i) => <CartItem Data={e} key={i}/>)}
            <div className="card bg-dark w-100 d-inline-block product mt-5">              
                <div className="card-body"> 
                    <p className="card-text mx-2 h5">Total: {all().price}</p>
                </div>
            </div>
        </div>
    )
}

export default CartList
