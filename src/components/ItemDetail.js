const Detail = ({Data}) =>
{
    return(
        <div className="card bg-dark w-100 d-inline-block product mt-5">
            <img src={Data.img} className="card-img-top img " alt="Producto De Ropa"/>
                <div className="card-body">
                    <h5 className="card-title">{Data.name}</h5>
                    <div> 
                        <p className="card-text d-inline mx-2">{Data.descrip}</p>
                        <p className="card-text d-inline mx-2">{Data.size}</p>
                        <p className="card-text d-inline mx-2 h-6">{Data.color}</p>
                        <button className="btn btn-primary d-inline">Buy</button>
                    </div>
                </div>
        </div>
    )
    
}

export default Detail;