import React from 'react';
import '../sitedemo/shopping.css';
// import img from "../sitedemo/image/img.jpg"
import phone from "../sitedemo/image/phone.jpg"
import phone1 from "../sitedemo/image/phone1.jpg"

function About() {
  return(
    <body>
    <div className='container'>
      <nav>
        <div className = 'logo'><span>Mobile</span>Hub</div>
        <div className="nav-right">
          <a href="#search">About</a>
          <a href="#about">Products</a>
          <a href="#login">Sign In</a>
        </div>
      </nav>
      <div class = "intro">
           "Welcome to MobileHub, your one-stop destination for the 
           latest smartphones and accessories. Discover top brands, 
           unbeatable prices, and exceptional service. Upgrade your tech game with us today. 
           Shop now and experience the future of mobile technology!"
          <button className='btn'>Shop Now</button>
      </div>
      {/* <img src={img} alt="" className='bg-image'/> */}
      </div>

    

      <div class="products-container">
        <div class="products">
          <div class = "product"> 
              <img src={phone} alt="" className='prd-image'/> 
              <span class="name">Ikea Smart Phone</span>
              <span class="priceText">1999</span>
              <button>Add to cart</button>
          </div>
            <div class="product">
            <img src={phone1} alt="" className='prd-image'/> 
            <span class="name">Smart Phone</span>
            <span class="priceText">12999</span>
            </div>

            </div>
          </div>
     
      </body>
)}

export default About;

