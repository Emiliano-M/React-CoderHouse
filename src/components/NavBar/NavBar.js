import "./NavBar.css"
import Cart from "./CartWidget"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getCategories} from "../../service/firebase/firebase"

const NavBar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        
        getCategories().then(categories => {
            setCategories(categories)
        }).catch(error => {
            console.log(error)
        })

    }, [])

    return (
        <nav className="navbar navbar-expand-lg navbar-light mb-5">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Shop</Link>                
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mb-2 mb-lg-0 h1">
                    
                        {categories.map(category => <Link key={category.id} className="nav-link" to={`/category/${category.name}`}>{category.name}</Link>)}
                        
                    </ul>
                    
                </div>
                <Cart/>
            </div>
        </nav>
    )

}

export default NavBar