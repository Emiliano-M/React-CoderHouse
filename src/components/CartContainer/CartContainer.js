import React, {useContext} from 'react';
import CartList from './CartList';
import CartContext from '../../Context/CartContext';

const CartContainer = () =>
{
    const {clear, costeTotal} = useContext(CartContext)

    return(
        <div>
            
            {costeTotal !== 0 && <CartList/>}
            {costeTotal !== 0 && <button onClick={clear} className="btn btn-secondary btn-lg mt-3">Limpiar Carro</button>}
            
            {costeTotal === 0 && <p className="h5">Agregue Un Producto Al Carrito y Aparecera Aqui</p>}
           
        </div>
    )
    
}

export default CartContainer;