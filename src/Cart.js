import React from 'react'
import { useContext } from 'react';
import { ProductContext } from './App';
import { Link } from "react-router-dom";
import  './home.css';
import './cost.css';
import './empty.css';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { MDBContainer } from 'mdb-react-ui-kit';
import {
  MDBNavbar,
 
  MDBIcon, 
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBadge
} from 'mdb-react-ui-kit';


function Cart() {

    const {addToCart,setAddToCart} = useContext(ProductContext);
    console.log (addToCart);



const removeProduct = (id) => {
  if (window.confirm("Are you sure to remove this product ?")) {
    addToCart.forEach((item, index) => {
          if (item.id === id) {
             addToCart.splice(index, 1)
              item.count = 1;

             

          }
      })

      setAddToCart([...addToCart]);
  }
}

if (addToCart.length === 0)

  return <section className='bg-warning' >
    <center><h2>Cart is Empty ...!!!</h2></center> 
</section>







//price calculation
  const sum = addToCart.reduce((accumulator, object) => {
    return accumulator + object.price;
  }, 0);



    return (

       <div > 
       

      <MDBNavbar expand='lg' light style={{ backgroundColor: '#adc2eb' }}>
      <MDBContainer fluid>
        <MDBNavbarNav>
          <MDBNavbarItem>
            <MDBNavbarLink href='#'>
              <MDBBadge pill color='danger'></MDBBadge>
              <Link to={{ pathname: `/`}}>
              <span className="square border" fluid light style={{ backgroundColor: '#e3f2fd' }}>
                <MDBIcon fas icon='home'>HOME </MDBIcon>
              </span>
              </Link>
             
            </MDBNavbarLink>
            
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>




    <MDBContainer  fluid light style={{ backgroundColor: '#f0f6f8' }}>
     < MDBRow>
     <MDBCol md='8'>

     </MDBCol>
     <MDBCol md='4'>
     <h1 className="text-danger fw-bold">
        Totalcost : <span class="badge badge-primary">${sum}</span>
      </h1>
     </MDBCol>
     </MDBRow>
      </MDBContainer> 
    
{
    
    addToCart.map((d) => {

      return (
        <>
        
   
<MDBContainer  className='img-thumbnail' fluid light style={{ backgroundColor: '#f0f6f8' }}>
    <MDBRow>
  <MDBCol md='4'>
    <p></p>
  <h5 className=' text-info'>ID : {d.id} </h5>
  <h5 className='fw-bold'> {d.title} </h5>

  </MDBCol>
  <MDBCol md='4'>
<p></p>
  <h5 className="text-success fw-bold">PRICE : ${d.price} </h5>
  <button  className='bg-danger mt-5 text-white' onClick={() => removeProduct(d.id)}>Remove from cart</button>
  </MDBCol>
  <MDBCol md='4' >
  <img height="200px" width="200px" alt={d.title} src={d.image} key={d.id} />

  
              
  </MDBCol>
</MDBRow>
</MDBContainer>
             
                
</>

      )
    })
   
}



       <div>
        
       <center>  <h1> Total Price :
        <MDBBadge className='ms-2' color="success" >${sum}</MDBBadge></h1></center>

        </div>

          
    
</div>    



      )
            }

export default Cart
