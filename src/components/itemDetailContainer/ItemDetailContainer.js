import Detail from "./ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../service/firebase/firebase";

const ItemDetailContainer = () => 
{   
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        setLoading(true)
        
        getProduct(id).then(product => {
            setProduct(product)
        }).catch((error) => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
        
        return () => {
            setProduct()
        }
    }, [id])

    
    if(loading){
        return(
            <div>
                <p>Cargando...</p>
            </div>
        )
    }

    return(
        <div>
            {  
                product.id &&<Detail Data={product}/>
            }
        </div>
    )
}

export default ItemDetailContainer;