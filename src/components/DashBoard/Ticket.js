import React from 'react'

const Ticket = ({Data}) => {

    return (

        <div className="card bg-dark w-50 d-inline-block product">

            <div className="card-body">
                <h3 className="card-title">{Data.buyer.email}</h3>
                <div> 
                    <p className="card-text d-inline mx-2">${Data.total}</p>
                    <p className="card-text mx-2">{Data.id}</p>                 
                </div>
            </div>
        </div>
            

    )
}

export default Ticket
