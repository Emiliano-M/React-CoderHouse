import "./Item.css"

const Item = ({Data}) =>
{
    return(
        <div className="card bg-dark w-50 d-inline-block product">
            <img src={Data.img} className="card-img-top img " alt="Producto De Ropa"/>
                <div class="card-body">
                    <h5 className="card-title">{Data.name}</h5>
                    <div> 
                        <p className="card-text d-inline mx-2">{Data.price}</p>
                        <a href="#" className="btn btn-primary d-inline">Buy</a>
                    </div>
                </div>
        </div>
    )
    
}

export default Item;