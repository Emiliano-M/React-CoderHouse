import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">  
      <BrowserRouter>
        <NavBar/>
        <Routes>      
          <Route exact path= "/" element= {<ItemListContainer/>} />
          <Route exact path= "/category/:categoryId" element= {<ItemListContainer/>} />
          <Route exact path= "/item/:id" element= {<ItemDetailContainer/>} />     
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
