import React from 'react'
import "./ProductContainer.css"

const ProductContainer = (props) => {
    return (

        <section className='productsSection'>
            <div className='titleStays'>
                <h2 className='productsTitle'>Stays in Finland</h2>
                <p className='staysCount'>12+ stays</p>
            </div>    
            <div className="productsContainer">
            {props.children}
            </div>
        </section>

    )
}

export default ProductContainer