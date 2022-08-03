import React from 'react'
import { useContext } from 'react';
import { ProductContext } from './App';
import { Link } from "react-router-dom";
import  './home.css';
import './cost.css';
import './empty.css';



function Cart() {

    const {addToCart,setAddToCart} = useContext(ProductContext);
    console.log (addToCart);



const removeProduct = id => {
  if (window.confirm("Are you sure to remove this product ?")) {
    addToCart.forEach((item, index) => {
          if (item.id === id) {
            setAddToCart( addToCart.splice(index, 1))
              item.count = 1;

             

          }
      })

      setAddToCart([...addToCart]);
  }
}

if (addToCart.length === 0)
  return <section className='empty'><center><h2>Cart is Empty ...!!!</h2></center> </section>


//price calculation
  const sum = addToCart.reduce((accumulator, object) => {
    return accumulator + object.price;
  }, 0);



    return (

        <div className="App">
          <Link to={{pathname : '/'}}  >
         <span className='home'>Home</span>
          </Link>


     <h1><span className='cost'>Total Price: ${sum}</span></h1>

     
    
{
    
    addToCart.map((d) => {

      return (
   
<div className='container'>
          <div className='border'>

            <div className="col-6 col-md-4" border='10px'>

              <div className="card testimonial-card" >

                <div className="card-up info-color"></div>

                <div className="avatar mx-auto white"> 
             
                <img height="200px" width="200px" alt={d.title} src={d.image} key={d.id} />
              


                </div>
                <div className="card-body">

                  <button className='btn'onClick={() => removeProduct(d.id)}>Remove from cart</button>
                  <h5>{d.price} </h5>
                  <h6>{d.title} </h6>
                  <h6>{d.description}</h6>



                </div>
              </div>
            </div>
          </div>

        </div>


      )
    })
   
}


    
    
        </div>
      )
            }

export default Cart