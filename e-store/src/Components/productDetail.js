import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../Helper/fetcher'
import { useNavigate } from 'react-router-dom'

const ProductDetail = () => {
const navigate=useNavigate();
const[product,setProdeuct]=useState({erorMassege:"",data:{}})
// const params=useParams()
const {productId}=useParams()


useEffect(()=>{
    const fetchData=async()=>{
    const responseObject= await getProductById(productId)
    setProdeuct(responseObject)
    }
    fetchData()
},[productId])
    
    
    
  return (
    
    
    <article >
    <div className='three-columns-grid'>
      {product.data.title}
      
    </div>
    <figure>
        <div className='category-product-image-container'>
        <img src={window.location.origin +`/assets/${product.data.image}`} alt={product.data.title}/>
        </div>
    </figure>

    <aside>
    {product.data.spec && 
    <div className='category-product-info-dimenstions'>
            <h3>Dimention</h3>
            <label>{product.data.spec.dimensions}</label>
        </div>
    }
    {product.data.spec && 
        <div className='category-product-info-capacity'>
        <h3>Capacity</h3>
        <label>{product.data.spec.capacity}</label>
        </div>
    }
    <div className='category-product-info-features'>
            <h3>Features</h3>
           <ul>
            {
                product.data.features?.map((f,index)=>{
                    return <li key={index}>{f}</li>

                })
            }
           </ul>
    </div>
    </aside>

    <aside>
    <div className='category-product-info-finance'>
        <div className='category-product-info-finance-price'>
            &pound;{product.data.price}
        </div>
    </div>
    <div className='category-product-info-stock'>
            <label>Stock Level:{product.data.stock}</label>
            <label>Free delivery</label>
        </div>
        
    <div className='category-product-detail-action'>
            <button onClick={()=>navigate(`products/${product.data.id}`)}>View product</button>
    </div>
    </aside>
    </article>   
            
        
  
  )
}

export default ProductDetail


/* ProductDetail id:{productId} title:{product.data.title}
       capacity:{product.data.spec && product.data.spec.capacity}
       dimensions:{product.data.spec && product.data.spec.dimensions} */