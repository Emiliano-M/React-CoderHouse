import React, { useState, useContext,  } from "react";
import CartContext from "../../Context/CartContext";
import { Link, useNavigate } from 'react-router-dom';
import { db } from "../../service/firebase/firebase"
import { addDoc ,collection, Timestamp } from "firebase/firestore"

const Form = () => {

    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    const [Id, setId] = useState("")
    const navigate = useNavigate()

    const {clear, costeTotal, Productos} = useContext(CartContext)

    const formSubmit = (event) => {

        event.preventDefault()
        setId("")

        if( Name.length !== 0 && Email.length !== 0 && Phone > 0 ) {

            const data = {
                buyer : {
                name : Name,
                email : Email,
                phone : Phone,
                },

                items : Productos,

                date : Timestamp.fromDate(new Date()),

                total : costeTotal

            }

            addDoc(collection(db, "forms"), data).then( (id) => {
                setId(id);
            }).catch( (error) => {
                console.log("Error subiendo form: ", error)
            })

            navigate("/dashboard")

        }

        else {
            alert("Debe completar todos los campos!")
        }
    }

    console.log( Name, " ", Email, " ", Phone)

    return costeTotal !== 0 ? (
        <div className='container'>
            <form>

                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nameInput" placeholder="Emiliano Montes" onChange={ (input) => setName(input.target.value) }/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="emailInput" placeholder="emiliano0montes@gmail.com" onChange={ (input) => setEmail(input.target.value) }/>    
                </div>

                <div className="mb-3">
                    <label className="form-label">Telefono</label>
                    <input type="number" className="form-control" id="PhoneInput" placeholder="541150223320" onChange={ (input) => setPhone(input.target.value) }/>      
                </div>
      
                <div id="emailHelp" className="form-text mb-3">Nunca compartiremos tus datos.</div>
                <button onClick={formSubmit} type="submit" className="btn btn-primary">Enviar</button>

            </form>
        </div>
    ) 
    : 
    (
        <div>
            <p className="h5">Agregue Un Producto Al Carrito y Aparecera Aqui</p>
            <Link className="btn btn-secondary btn-lg mt-3" to="/"> Home </Link>
        </div>
    )
    
    
}

export default Form


