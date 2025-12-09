import React, { useEffect } from 'react'
import './Popular.css'
import Item from '../Items/Item'
import {useState} from 'react'

const Popular = () => {

  const [popularProducts, setPopularProducts] = React.useState([]);

  useEffect(() => {
    fetch('https://shopnow-backend-6i14.onrender.com/popularinwomen')
      .then(response => response.json())
      .then(data => setPopularProducts(data))
      .catch(error => console.error('Error fetching popular products:', error));
  }, []);

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr/>
      <div className="popular-item">
        {popularProducts.map((item, i)=>{
            return <Item key={i} id = {item.id} name={item.name} image={item.image} new_price={item.new_price} old_price = {item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
