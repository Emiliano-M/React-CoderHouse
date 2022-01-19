import React, { useState, useEffect } from 'react'
import { getTickets } from '../../service/firebase/firebase'
import Ticket from './Ticket'
import { Link } from 'react-router-dom'

const DashBoard = () => {

    const [Tickets, setTickets] = useState([])
    const [Loading, setLoading] = useState(true)
    
    useEffect(() => {
        
        setLoading(true)

        getTickets().then(tickets => {
            setTickets(tickets)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

    }, [])
    

    if(Loading){
        return(
            <div>
                <p>Cargando...</p>
            </div>
        )
    }
    
    return Tickets.length !== 0 ?(
        <div className='row'>
            <div className='col-3'/>

            <div className='col'>
                {  
                    Tickets.map((e,i) => <Ticket Data={e} key={i}/>)
                }
            </div>

            <div className='col-3'/>
        </div>
    ) :
    (
        <div>
            <p className="h5">No Hay Ningun Ticket De Compra!</p>
            <Link className="btn btn-secondary btn-lg mt-3" to="/"> Home </Link>
        </div>
    )
}

export default DashBoard
