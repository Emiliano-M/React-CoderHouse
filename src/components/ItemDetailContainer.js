import Detail from "./ItemDetail/ItemDetail";
import { getOneProduct } from "../Products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => 
{   
    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect( () => {     
        getOneProduct(id).then((Products) => 
            {
                setProduct(Products);
            })
    },[id]) 

    
    return(
        <div>
            {  
                product.id &&<Detail Data={product}/>
            }
        </div>
    )
}

export default ItemDetailContainer;