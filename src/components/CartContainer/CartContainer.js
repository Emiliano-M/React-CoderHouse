import React, {useContext} from 'react';
import CartList from './CartList';
import CartContext from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const CartContainer = () =>
{
    const {clear, all} = useContext(CartContext)

    return(
        <div>
            
            {all().price !== 0 && <CartList/>}
            {all().price !== 0 && <button onClick={clear} className="btn btn-secondary btn-lg mt-3">Limpiar Carro</button>}
            {all().price !== 0 && <Link className="btn btn-secondary btn-lg mt-3 ms-2" to="/form"> Terminar Compra </Link>}
            
            {all().price === 0 && <p className="h5">Agregue Un Producto Al Carrito y Aparecera Aqui</p>}
            {all().price === 0 && <Link className="btn btn-secondary btn-lg mt-3" to="/"> Home </Link>}
        </div>
    )
    
}

export default CartContainer;