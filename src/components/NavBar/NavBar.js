import Cart from "./CartWidget"
import { getCategories } from "../../Products"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const NavBar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        getCategories().then(categories => {
            setCategories(categories);
        })
    }, [])

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Shop</Link>                
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                    
                        {categories.map(category => <Link key={category.id} className="nav-link" to={`/category/${category.id}`}>{category.id}</Link>)}
                        
                    </ul>
                    
                </div>
                <Cart/>
            </div>
        </nav>
    )

}

export default NavBar