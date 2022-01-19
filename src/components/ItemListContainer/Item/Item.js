import "./Item.css"
import { Link } from "react-router-dom";

const Item = ({Data}) =>
{

    return(
        <div className="w-50 d-inline-block producto">
            <img src={Data.img} className="card-img-top mt-2 img " alt={"Imagen de " + Data.name}/>
                <div className="card-body">
                    <h5 className="card-title">{Data.name}</h5>
                    <div> 
                        <p className="card-text d-inline mx-2">${Data.price}</p>
                        <Link className="nav-link" to={`/item/${Data.id}`}> <button className="btn btn-secondary btn-lg">Detalle</button> </Link>
                    </div>
                </div>
        </div>
    )
    
}

export default Item;