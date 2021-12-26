import Cart from "./CartWidget"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { collection, getDocs, query} from "firebase/firestore"
import { db } from "../../service/firebase/firebase"

const NavBar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        
        getDocs(collection(db, "categories")).then((querySnapshot) => {
            const categories = querySnapshot.docs.map (doc => {
                return{ id: doc.id, ...doc.data()}
            })
            setCategories(categories)
        }).catch((error) => {
            console.log("Error searching: ", error)
        })

    }, [])

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Shop</Link>                
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                    
                        {categories.map(category => <Link key={category.id} className="nav-link" to={`/category/${category.name}`}>{category.name}</Link>)}
                        
                    </ul>
                    
                </div>
                <Cart/>
            </div>
        </nav>
    )

}

export default NavBar