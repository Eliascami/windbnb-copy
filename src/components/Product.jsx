import React from 'react'
import "./Product.css"
import BuyBtn from './BuyBtn/BuyBtn'

const Product = (props) => {
  return (
    <div className='product'>
        <img className='productImg' src={props.photo} alt="product" />
        <div className='productDetails'>
          <div className='btnAndName'>
            <BuyBtn />
            <p className='productName'>{props.type}</p>
            {props.beds && <p className='productBeds'> .  {props.beds} beds</p>}
          </div>
          <div className='rated'>
            <i class="bi bi-star-fill"></i>
            <p className='ratedNum'>{props.rated}</p>
          </div>
          
        </div>
        <h4 className='aparTitle'>{props.title}</h4>

    </div>
  )
}

export default Product