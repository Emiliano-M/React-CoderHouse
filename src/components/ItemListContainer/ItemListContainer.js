import Item from "./Item/Item";
import { getProduct } from "../../Products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ItemListContainer = () => 
{   
    const [product, setProduct] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {     
        getProduct(categoryId).then(Products => 
            {
                setProduct(Products);
            })
    },[categoryId]) 
    
    return(
        <div>
            {  
                product.map((e,i) => <Item Data={e} key={i}/>)
            }
        </div>
    )
}

export default ItemListContainer 