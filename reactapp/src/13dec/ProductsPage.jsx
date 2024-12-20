import React, { useEffect, useState } from "react";
import BSpinner from "./spinner";
import { Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import "./indexx.css"
function ProductPage(){
    const [products,SetProducts]=useState([])
    useEffect(()=>{fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(res=>SetProducts(res))},[])
        return(
            <div >
              <ListGroup>
            {products.length>0?(products.map((a)=><ListGroup.Item ><Link id="a" to={`/products/${a.id}`}>{a.title}</Link></ListGroup.Item>
)):(<BSpinner/>)}
          
      
    </ListGroup>
            </div>
        )
    
}
export default ProductPage;