import React from 'react'

const Ticket = ({Data}) => {

    return (

        <div className="card bg-dark w-100 justify-content-center mb-3">

            <div className="card-body">
                <p className="card-title"> Email: </p>
                <p className="card-text d-inline mx-2">{Data.buyer.email}</p>
                <div> 
                    <p className="card-text d-inline mx-2">${Data.total}</p>
                    <p className="card-title"> Id: </p>
                    <p className="card-text mx-2">{Data.id}</p>                 
                </div>
            </div>
        </div>
            

    )
}

export default Ticket
