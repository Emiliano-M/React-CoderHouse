import Detail from "./ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc} from "firebase/firestore"
import { db } from "../../service/firebase/firebase";

const ItemDetailContainer = () => 
{   
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        setLoading(true)
        getDoc(doc(db, "items", id)).then((QuerySnapshot) => {
            const product = {id: QuerySnapshot.id, ...QuerySnapshot.data()}
            setProduct(product)
        }).catch((error) => {
            console.log("Error serching: ", error)
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