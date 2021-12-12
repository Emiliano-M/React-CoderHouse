import "./ItemDetail.css"
import ItemCount from "../ItemCount";
import React, {useState} from 'react';
import { Link } from "react-router-dom";

const Detail = ({Data}) =>
{
    const [itemCountFlag, setTemp] = useState(0)

    const onAdd = (value) => {
        alert("Cart Updated!");
        setTemp(value);
    }

    return(
        <div className="card bg-dark w-100 d-inline-block product mt-5 itemDetail">
            <img src={Data.img} className="DetailImg" alt="Producto De Ropa"/>
                <div className="card-body">
                    <p className="card-title h3">{Data.name}</p>
                    <p className="card-text mx-2 h6">{Data.descrip}</p>
                    <p className="card-text mx-2 h5">Talles: {Data.size}</p>
                    <p className="card-text mx-2 h5">Colores: {Data.color}</p>
                    <div className="">
                        <h3>${Data.price}</h3>
                        {itemCountFlag == 0 && (<ItemCount initial={1} stock={10} onAdd={onAdd}/>)}
                        <Link className="btn btn-secondary btn-lg" to="/cart"> Terminar Compra </Link>
                    </div>
                </div>
        </div>
    )
    
}

export default Detail;