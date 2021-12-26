import Item from "./Item/Item";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where} from "firebase/firestore"
import { db } from "../../service/firebase/firebase";


const ItemListContainer = () => 
{   
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(() => {
        if(!categoryId){
            setLoading(true)
            getDocs(collection(db, "items")).then((querySnapshot) => {
                const products = querySnapshot.docs.map (doc => {
                    return{ id: doc.id, ...doc.data()}
                })
                setProduct(products)
            }).catch((error) => {
                console.log("Error searching: ", error)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            setLoading(true)
            getDocs(query(collection(db, "items"), where("category", "==", categoryId))).then((querySnapshot) => {
                const products = querySnapshot.docs.map (doc => {
                    return{ id: doc.id, ...doc.data()}
                })
                setProduct(products)
            }).catch((error) => {
                console.log("Error searching: ", error)
            }).finally(() => {
                setLoading(false)
            })
        }
    }, [categoryId])

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
                product.map((e,i) => <Item Data={e} key={i}/>)
            }
        </div>
    )
}

export default ItemListContainer 