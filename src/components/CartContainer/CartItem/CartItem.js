import "./CartItem.css";
import React, { useContext } from 'react';
import CartContext from "../../../Context/CartContext";

const CartItem = (props) =>
{
    const {removeItem} = useContext(CartContext)

    const remove = () => {
        removeItem(props.Data.id)
    }
    
    return(
        <div>
         <div className="card bg-dark w-50 d-inline-block product">
            <img src={props.Data.img} className="card-img-top img " alt="Producto De Ropa"/>
                <div className="card-body">
                    <h5 className="card-title">{props.Data.name} x {props.Data.quantity}</h5>
                    <div> 
                        <p className="card-text d-inline mx-2">${(props.Data.price * props.Data.quantity)}</p>
                        <button onClick={remove} className="btn btn-secondary btn-lg">Remover</button>
                    </div>
                </div>
        </div>      
        </div>
    )
    
}

export default CartItem;