import ItemCount from "./ItemCount.js";
import ItemList from "./ItemList.js";

const ItemListContainer = (props) => 
{

    const onAdd = (props) => {
        alert("Cart Updated!");
    }
    return (
        <div>
            {/* <p> {props.itemList} </p>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/> */}
            
            <ItemList/>
        </div>
    )

}

export default ItemListContainer;