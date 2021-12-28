import React, { useState, useEffect } from 'react'
import { db } from '../../service/firebase/firebase'
import { collection, getDocs} from "firebase/firestore"
import Ticket from './Ticket'

const DashBoard = () => {

    const [Tickets, setTickets] = useState([])
    const [Loading, setLoading] = useState(true)
    
    useEffect(() => {
        
        setLoading(true)
        getDocs(collection(db, "forms")).then((querySnapshot) => {
            const tickets = querySnapshot.docs.map(doc => {
                return{ id: doc.id, ...doc.data()}
            })
            setTickets(tickets)
        }).catch((error) => {
            console.log("Error searching: ", error)
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
    
    return(
        <div>
            {  
                Tickets.map((e,i) => <Ticket Data={e} key={i}/>)
            }
        </div>
    )
}

export default DashBoard
