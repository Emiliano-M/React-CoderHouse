import "./ItemDetail.css"
import ItemCount from "../ItemCount";
import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import CartContext from "../../../Context/CartContext";

const Detail = ({Data}) =>
{
    const [itemCountFlag, setTemp] = useState(0)
    const { addItem, getQuantitybyId } = useContext(CartContext)

    const cartQuantity = getQuantitybyId(Data.id)

    if(cartQuantity)
    {
        Data.stock = Data.stock - cartQuantity
    }

    const onAdd = (value) => {
        setTemp(value);
        addItem(Data, value);
    }

    return(
        <div className="d-inline-block product mt-5 itemDetail detalle">
            <img src={Data.img} className="DetailImg" alt="Producto De Ropa"/>
                <div className="card-body">
                    <p className="card-title h3">{Data.name}</p>
                    <p className="card-text mx-2 h6">{Data.descrip}</p>
                    <p className="card-text mx-2 h5">Talles: {Data.size}</p>
                    <p className="card-text mx-2 h5">Colores: {Data.color}</p>
                    <div className="">
                        <h3>${Data.price}</h3>
                        {itemCountFlag === 0 && (<ItemCount initial={1} stock={Data.stock} onAdd={onAdd}/>)}
                        <Link className="btn btn-secondary btn-lg mt-3" to="/cart"> Terminar Compra </Link>
                    </div>
                </div>
        </div>
    )
    
}

export default Detail;