

import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { createContext } from 'react';
import { useEffect, useState } from 'react'
import Home from './Home'
import Details from './Details'
import Cart from './Cart';




export const ProductContext = createContext({});

function App() {
  const [products, setProducts] = useState();
  const[addToCart,setAddToCart]=useState([]);
  
    
  useEffect(() => {
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then((res) => {
    setProducts(res);
  })
}, []);

const value = {
  products: [products, setProducts]
}


  
  return (
    <ProductContext.Provider value={{products, setProducts,addToCart,setAddToCart}}>
           
   
        
    <BrowserRouter>
    <Routes>
    
    <Route exact path='/' element={<Home />}></Route>
    <Route exact path='/Details/:id' element={<Details/>}></Route>
    <Route exact path='/Cart' element={<Cart/>}></Route>


    </Routes>
    
    
    </BrowserRouter>
    </ProductContext.Provider>
    
    
  );

}
export default App;
