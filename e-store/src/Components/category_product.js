import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

function CategoryProduct({id,title,image,spec,features,price,stock}) {
    const navigate=useNavigate();
  return (
    <article className='category-product-info-header'>
    <div className='category-product-title'>
      <Link to={`products/${id}`}>{title}</Link>
      
    </div>
    <figure>
        <div className='category-product-image-container'>
        <img src={`../assets/${image}`} alt={title}/>
        </div>
    </figure>
    <aside>
    <div className='category-product-info-dimenstions'>
            <h3>Dimention</h3>
            <label>{spec.dimensions}</label>
        </div>
    {spec.capacity && 
        <div className='category-product-info-capacity'>
        <h3>Capacity</h3>
        <label>{spec.capacity}</label>
        </div>
        }
        <div className='category-product-info-features'>
            <h3>Features</h3>
           <ul>
            {
                features?.map((f,index)=>{
                    return <li key={index}>{f}</li>

                })
            }
           </ul>
        </div>

    </aside>
    <aside>
    <div className='category-product-price'>
        <div className='category-product-info-finance-price'>
            &pound;{price}
        </div>
    </div>
        <div className='category-product-info-stock'>
            <label>Stock Level:{stock}</label>
            <label>Free delivery</label>
        </div>
        
        <div className='category-product-action'>
            <button onClick={()=>navigate(`products/${id}`)}>View product</button>
            <button onClick={()=>navigate(`basket`)}>Add to Basket</button>

        </div>
    </aside>
    </article>
  )
}

export default CategoryProduct

