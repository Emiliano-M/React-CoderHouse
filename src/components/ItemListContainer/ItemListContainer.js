import Item from "./Item/Item";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../service/firebase/firebase";


const ItemListContainer = () => 
{   
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)
        
        getProducts("category", "==", categoryId).then(products => {
            setProduct(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

    }, [categoryId])

    if(loading){
        return(
            <div>
                <p>Cargando...</p>
            </div>
        )
    }
    
    return(
        <div className="row">
            <div className="col-2"/>

            <div className="col" style={{marginInline: "150px"}}>
            {  
                product.map((e,i) => <Item Data={e} key={i}/>)
            }
            </div>

            <div className="col-2"/>
        </div>
    )
}

export default ItemListContainer