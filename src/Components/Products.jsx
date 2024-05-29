import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import axios from "axios"



const Products = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
   

    useEffect(() => {
            setLoading(true);
            // const response =  fetch("https://fakestoreapi.com/products");
            // const products =  response.json();
            axios.get("https://fakestoreapi.com/products").then( (res)=> {
              setData(res.data)  
              setFilter(res.data)

            }) 
            // setData(products);
            // setFilter(products);
            setLoading(false);
        

    }, []);


    const Loading = () => {
        return (
            <>
             <div className="mt-4 ">
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                </div>
            </>
        )
    }
    const filterProduct = (cat) => {
        const updatedItems = data.filter((item) => item.category === cat)
        setFilter(updatedItems)
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons">
                    <Button onClick={() => setFilter(data)} className='me-2' variant="outline-dark">All Brands</Button>
                    <Button onClick={() => filterProduct("men's clothing")} className='me-2' variant="outline-dark">Men</Button>
                    <Button onClick={() => filterProduct("women's clothing")} className='me-2' variant="outline-dark">Women</Button>
                    <Button onClick={() => filterProduct("jewelery")} className='me-2' variant="outline-dark">Jewelery</Button>
                    <Button onClick={() => filterProduct("electronics")} className='me-2' variant="outline-dark">Electronics</Button>
                </div>
                {filter.map((item) => {
                    return (
                        <div className="col-3 mt-5">
                            <Card key={item.id} className="border border-dark">
                                <Card.Img variant="top" style={{ height: '300px' }} src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.title.substring(0, 12)}</Card.Title>
                                    <Card.Text className='fw-bold'>
                                        $ {item.price}
                                    </Card.Text>
                                    <Link to={`/products/${item.id}`}> <Button variant="dark">Buy Now</Button></Link>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </>
        )
    }
    return (
        <div>
            <div className="container mt-5 pb-5">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className='display-6 '>All Products</h1>
                        <hr />
                        <div className="row justify-content-center">
                            {loading ? <Loading /> : <ShowProducts />}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer section start */}
            <section className='Footer'>

            <div className="Footer-top-links">
  <div className="footer-social-wrapper">
    <a href="www.facebook.com"><FaFacebookF /></a>
    <a href="www.twitter.com"><FaTwitter /></a>
    <a href="www.linkedin.com"><FaLinkedin /></a>
    <a href="www.instagram.com"><FaInstagram /></a>
  </div>
</div>
         <div className="Footer-left">
          <h2>Connect With US</h2>

         </div>
         <div className="footer-div">
         <div className="hero11-footer">
          <div className="event-11"> 
          <p>Company Info</p>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
         </div>

         <div className="event-12">
          <p>Shop By Category</p>
          <p>Shop Homes</p>
          <p>Womens</p>
          <p>Mans</p>
          <p>Kids</p>
         </div>

         
         </div>

         <div className="footer-middle">
          <p>Location</p>
          <p>India</p>
          <p>Kolkata</p>
          <p>Pune</p>
          <p>Aurangabad</p>

          </div>

          <div className="footer-rigth">
          <p>Get In Touch</p>
          <div className="does"> 
          <input type="text" id='email' className='subscribe-input' placeholder='Your Email' />
          <button  className='subcribe-btn'>Subscribe</button>
          </div>
          <p>Lorem impsum dolor amit</p>
          
          <div className='pement-way'>
            <div className='money-one'>       
                      <img src="./Images/paypal.jpg" alt=''></img>
            </div>
            


          </div>
          </div>
          </div>
<div className="copy-rigth">
  <p>Copyrights© 2023 Best Buy</p>

</div>

            </section>
        </div>
    )
}

export default Products;