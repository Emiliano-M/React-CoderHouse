import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext";
import React, {useContext} from "react";

const Cart = () => {

    const {totalProductos} = useContext(CartContext)


    return totalProductos !== 0 ?(
        
        <Link className="btn btn-light" to="/cart"> <img src="../img/cart.svg" className="img-fluid" alt= "Carro de compras"/> {totalProductos} </Link>
    ) : 
    (<div>

    </div>)


}

export default Cart;
