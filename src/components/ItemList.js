import Item from "./Item/Item";
import { getProduct } from "../Products";
import { useEffect, useState } from "react";


const ItemList = () => 
{   
    const [product, setProduct] = useState([])

    useEffect( () => {     
        getProduct().then((Products) => 
            {
                setProduct(Products);
            })
    },[]) 

    return(
        <div>
            {  
                product.map((e,i) => <Item Data={e} key={i}/>)
            }
        </div>
    )
}

export default ItemList 