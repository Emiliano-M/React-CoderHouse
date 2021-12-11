import "./ItemDetail.css"
import ItemCount from "../ItemCount";

const Detail = ({Data}) =>
{

    const onAdd = (props) => {
        alert("Cart Updated!");
    }

    return(
        <div className="card bg-dark w-100 d-inline-block product mt-5 itemDetail">
            <img src={Data.img} className="DetailImg" alt="Producto De Ropa"/>
                <div className="card-body">
                    <p className="card-title h3">{Data.name}</p>
                    <p className="card-text mx-2 h6">{Data.descrip}</p>
                    <p className="card-text mx-2 h5">Talles: {Data.size}</p>
                    <p className="card-text mx-2 h5">Colores: {Data.color}</p>
                    <div className="">
                        <h3>${Data.price}</h3>
                        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
                    </div>
                </div>
        </div>
    )
    
}

export default Detail;