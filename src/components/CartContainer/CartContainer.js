import React, {useContext} from 'react';
import CartList from './CartList';
import CartContext from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const CartContainer = () =>
{
    const {clear, costeTotal} = useContext(CartContext)

    return(
        <div>
            
            {costeTotal !== 0 && <CartList/>}
            {costeTotal !== 0 && <button onClick={clear} className="btn btn-secondary btn-lg mt-3">Limpiar Carro</button>}
            {costeTotal !== 0 && <Link className="btn btn-secondary btn-lg mt-3 ms-2" to="/form"> Terminar Compra </Link>}
            
            {costeTotal === 0 && <p className="h5">Agregue Un Producto Al Carrito y Aparecera Aqui</p>}
            {costeTotal === 0 && <Link className="btn btn-secondary btn-lg mt-3" to="/"> Home </Link>}
        </div>
    )
    
}

export default CartContainer;