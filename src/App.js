import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './Context/CartContext';
import CartContainer from './components/CartContainer/CartContainer';

function App() {
  return (
    <div className="App">  
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>      
          <Route exact path= "/" element= {<ItemListContainer/>} />
          <Route exact path= "/category/:categoryId" element= {<ItemListContainer/>} />
          <Route exact path= "/item/:id" element= {<ItemDetailContainer/>} /> 
          <Route exact path= "/cart" element= {<CartContainer/>} />    
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
    </div>
  );
}

export default App;
