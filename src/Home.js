import React from 'react'
import { useContext} from 'react'
import { ProductContext } from './App';
import { Link } from "react-router-dom";
import './cart.css'
import { MDBIcon,MDBNavbar} from 'mdb-react-ui-kit';


function Home() {

  const {products, setProducts,addToCart,setAddToCart} = useContext(ProductContext);

  const Addtocartfunc = (product) => {

    const newobject ={
      id: product.id,
      title:product.title,
      price : product.price,
      image : product.image,
      description : product.description,
    
    }
    
    setAddToCart ([...addToCart,newobject])
    
    }
 


  return (

    
    <div className="App">
    <div >
    

    <MDBNavbar class="navbar navbar-expand-lg navbar-dark primary-color">

<a class="navbar-brand" href="#">Navbar</a>

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
  aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="basicExampleNav">

  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <a class="nav-link" href="#">Home
        <span class="sr-only">(current)</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Features</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Pricing</a>
    </li>

    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">Dropdown</a>
      <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </li>

  </ul>

  <form class="form-inline">
    <div class="md-form my-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
    </div>
  </form>
</div>

</MDBNavbar>






    <ul className ="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className ="nav-link waves-effect" href="#">Home
            <span className ="sr-only">(current)</span>
          </a>

        <Link to={{pathname : '/Cart'}} >
        <MDBIcon fas icon="shopping-cart" /> Cart 
          </Link>

        </li>



      </ul>

     
      



    
      {

        (products) ? (
          products.map((product) => {

            return (
              
              <div className='container'>
                <div className='border'>
               
                <div className="col-6"  border='10px'>

                  <div className="card testimonial-card" >

                    <div className="card-up info-color"></div>

                    <div className="avatar mx-auto white">
                      
                    <Link to={{pathname:`/Details/${product.id}`}}>
                   
                    <img height="200px" width="200px" alt={product.title} src={product.image} key={product.id} />
                            </Link>
                     
        
                    </div>
                    <div className="card-body">
                  
                    <button className='btn' onClick={() => Addtocartfunc(product)} >Add to cart</button>
                      <h5>{product.price}</h5>
                      <h6>{product.title}</h6>
                      
                     

                    </div>
                  </div>
                </div>
</div>

              </div>
             

            )
          })
        ) : (<h1>loading....</h1>)
      }



    </div>
   

  </div>
  )
}

export default Home