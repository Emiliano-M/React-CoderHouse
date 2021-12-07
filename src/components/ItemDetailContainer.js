import Detail from "./ItemDetail";
import { getOneProduct } from "../Products";
import { useEffect, useState } from "react";

const ItemDetail = () => 
{   
    const [product, setProduct] = useState({})

    useEffect( () => {     
        getOneProduct(1).then((Products) => 
            {
                setProduct(Products);
            })
    },[]) 

    return(
        <div>
            {  
                product.id &&<Detail Data={product}/>
            }
        </div>
    )
}

export default ItemDetail;