import React from 'react';
import './app.css';
import ProductContainer from './components/ProductContainer';
import Product from './components/Product';
import data from './assets/stays.json';
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <ProductContainer>
        {data.map( stays=> 
          <Product 
            name={stays.city}
            photo={stays.photo}
            type={stays.type}
            beds={stays.beds}
            rated={stays.rating}
            title={stays.title}
          />
        )}
      </ProductContainer>
    </>
  )
}

export default App /* se debe exportar porque lo vamos a importar en otro lado, en donde se va a dibujar, por ejemplo main.jsx */
