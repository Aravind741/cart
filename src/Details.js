import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useContext} from 'react'
import { ProductContext } from './App';
import { Link } from "react-router-dom";
import  './home.css';
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
      id: oneproduct.id,
      price : oneproduct.price,
      image : oneproduct.image,
      description : oneproduct.description,
      title : oneproduct.title
    
    }
    
    setAddToCart ([...addToCart,newobjects])
    
    }


 

  return (

    

    <MDBContainer fluid light style={{ backgroundColor: '#e3f2fd' }}>
<div bg-color='light'>


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
          <Link to={{ pathname: `/Cart`}}>
          <span className="square border" fluid light style={{ backgroundColor: '#e3f2fd' }}>
            <MDBIcon fas icon='shopping-cart'>Cart </MDBIcon>
          </span>
          </Link>
        </MDBNavbarLink>
        
      </MDBNavbarItem>
    </MDBNavbarNav>
  </MDBContainer>
</MDBNavbar>
   

    <MDBContainer  className='img-thumbnail' fluid light style={{ backgroundColor: '#f0f6f8' }}>
    <MDBRow>
  <MDBCol md='8'>
    <h1 className="text-info fw-bold">PRODUCT DETAILS</h1>

  </MDBCol>
  <MDBCol md='4' >
  <img  light style={{ backgroundColor: '#c8e3fa' }} height="300px" width="300px"  key={oneproduct.id} alt={oneproduct.title} src={oneproduct.image} />
  </MDBCol>
</MDBRow>
</MDBContainer>
<MDBContainer  className='img-thumbnail' fluid light style={{ backgroundColor: '#f0f6f8' }}>
    <MDBRow>
  <MDBCol md='8'>
  <div  className="text-center">
 <p></p>
  <button className='bg-primary mt-5 text-white' onClick={()=> Addfunc(oneproduct)} >Add to cart</button>
  <p></p>
  <h3 className="text-info" >ID :{oneproduct.id}</h3>
  <h3 className="text-success fw-bold">PRICE : ${oneproduct.price}</h3>
  <h5 className=" fw-bold">CATEGORY : {oneproduct.category}</h5>

  </div>
  <div  className="text-center">
 <p></p>
 <h5 className=" fw-bold">TITLE : {oneproduct.title}</h5>
 <p></p>
 <h4 className=" fw-bold">DESCRIPTOIN : {oneproduct.description}</h4>


  </div>
   
  </MDBCol>
  <MDBCol md='4' >
  
  </MDBCol>
</MDBRow>
</MDBContainer>

 
  </div>
  </MDBContainer>
  
      )
      
    }
 

  
export default Details;

