import React from 'react'
import { useContext,useState} from 'react'
import { ProductContext } from './App';
import { Link } from "react-router-dom";
import './cart.css'
import './button.css'

import { 
  MDBIcon,
  MDBNavbar,
  MDBNavbarItem,
  MDBContainer,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
  MDBRow,
   MDBCol,

} from 'mdb-react-ui-kit';



function Home() {

  const {products, setProducts,addToCart,setAddToCart} = useContext(ProductContext);
  const [showNavColor, setShowNavColor] = useState(false);

  const Addtocartfunc = (product) => {

    const newobject ={
      id: product.id,
      price : product.price,
      image : product.image,
      description : product.description,
      title:product.title
    
    }
    
    setAddToCart ([...addToCart,newobject])
     
    }
 


  return (

    <MDBContainer fluid light style={{ backgroundColor: '#e3f2fd' }}>
    <div >
    <div>
    





{/* Navbar starts here */}

<MDBNavbar expand='lg' dark bgColor='primary'>
        <MDBContainer fluid>
          <MDBNavbarBrand >ShopWeb</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColor(!showNavColor)}>
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColor} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>
                <MDBNavbarLink aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              
              <MDBNavbarItem>

              <Link to={{pathname : '/Cart'}} > 
               <MDBNavbarLink aria-current='page' href='#'>Cart</MDBNavbarLink>         
               </Link>

              </MDBNavbarItem>
      
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>


{/* Navbar ends here */}


     


      



    
      {

        (products) ? (
          products.map((product) => {

            return (
              
              <div >
                <div className="border">
              

{/* list here */}

{/* image part */}
<>

<MDBContainer fluid>
  <p></p>
  <div >
      <MDBRow fluid >


        <MDBCol  md='3'   style={{ backgroundColor: '#e3f2fd'  }} >



                      
                    <Link to={{pathname:`/Details/${product.id}`}}>
                   
                    <img height="200px" width="200px" alt={product.title} src={product.image} key={product.id} />
                            </Link>
                     
                
</MDBCol>



{/* title part */}


        <MDBCol  md='3' >
        <div className="title">
        <div className="card-body">
        
                    
                    <h4>Title :<br></br><h6> {product.title}</h6></h4>
                  
                  </div>
                  </div>
                  
        </MDBCol>

    
{/* price part */}


        <MDBCol  md='3' >
        <div className="card-body">
        
      
                  
        <h4 className="text-success fw-bold">Price :<br></br><h6>${product.price}</h6> </h4>

        </div>
      
        </MDBCol>
       


{/* add button */}

<MDBCol  md='3' >
<div className="card-body">

          
<button className='button' onClick={() => Addtocartfunc(product)} >Add to cart</button>
</div>
</MDBCol>



        <p></p>
      </MDBRow>
      </div> 
    </MDBContainer>
</>
</div>

{/* list here ends */}


              

              </div>
             

            )
          })
        ) : (<h1>loading....</h1>)
      }



    </div>
   
  </div>
  </MDBContainer>
  )
}

export default Home