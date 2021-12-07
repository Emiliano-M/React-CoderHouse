import ItemCount from "./ItemCount.js";
import ItemDetail from "./ItemDetailContainer.js";
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
            <ItemDetail/>
            
        </div>
    )

}

export default ItemListContainer;