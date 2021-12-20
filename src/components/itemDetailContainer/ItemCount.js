import React, {useState} from 'react';


const ItemCount = (props) => {

    const [count, setcount] = useState(props.initial);
    

    const handleClickp = () => {
        if(count < props.stock)
        {
          setcount(count + 1); 
        }
    }

    const handleClickl = () => {
        if(count > 1)
        {
          setcount(count - 1); 
        }
    }

    const onAdd = () => {
        props.onAdd(count)
    }
    return (

        <div>
            <div className="my-4">
                <button onClick={handleClickl} type="button" className="btn btn-secondary"> - </button>
                <span> {count} </span> 
                <button onClick={handleClickp} type="button" className="btn btn-secondary"> + </button>      
            </div>

            <button onClick={onAdd} type="button" className="btn btn-secondary btn-lg"> Agregar </button>
                     
        </div>
        
    )

}

export default ItemCount;