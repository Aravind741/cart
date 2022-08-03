import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useContext} from 'react'
import { ProductContext } from './App';
import { Link } from "react-router-dom";
import  './home.css';



function Details (props) {

  const [oneproduct, setOneproduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then((res) => {
        setOneproduct(res);
      })
  }, [id]);


  const {products, setProducts ,addToCart,setAddToCart} = useContext(ProductContext);

  const Addfunc = (oneproduct) => {

    const newobjects ={
    
      price : oneproduct.price,
      image : oneproduct.image,
      description : oneproduct.description,
    
    }
    
    setAddToCart ([...addToCart,newobjects])
    
    }


 

  return (


    <div className="App">
    <Link to={{pathname : '/'}}  >
<span className='home'>Home</span>
</Link>
  
      <div className='container'>

        <div className='border'>

          <div className="col-6 " border='10px'>

            <div className="card testimonial-card" >

              <div className="card-up info-color"></div>

              <div className="avatar mx-auto white">
                <img height="400px" width="400px" key={oneproduct.id} alt={oneproduct.title} src={oneproduct.image} />

              </div>
              <div className="card-body">

              
              <button className='btn' onClick={() => Addfunc(oneproduct)} >Add to cart</button>
                      <h5>{oneproduct.price}</h5>
                      <h4>{oneproduct.title}</h4>
                      <h6>{oneproduct.description}</h6>
                


              </div>
            </div>
          </div>
        </div>
</div>
      </div>
      )
      
    }
 

  
export default Details;



