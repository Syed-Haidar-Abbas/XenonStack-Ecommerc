import React from 'react'
import './CSS/ShopCategory.css'
import allproduct from '../Components/Assets/allproduct'
import Item from '../Components/Item/Item'

export const ShopCategory = (props) => {
  return (
    <div className='shop-category'>
      <img style={{width:"100%", height:"70vh"}} src={props.banner} alt=""/>
      <div className='popular'>
        <h1>POPULAR IN SOFAS</h1>
        <hr/>
        <div className="popular-item">
            {allproduct.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
      </div>
    </div>
    
  )
}
export default ShopCategory