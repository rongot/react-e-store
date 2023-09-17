import React,{useContext} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { cartContext } from '../contexts/cartContext';



function CategoryProduct({id,title,image,spec,features,price,stock}) {
    const navigate=useNavigate();
    const contexts=useContext(cartContext)
    const {addProduct}=contexts
  return (
    <article >
    <ProductTitle>
      <Link to={window.location.origin +`/products/${id}`}>{title}</Link>
      
    </ProductTitle>
    
    <figure>
        <ProductImageContainer>
        <ProductImageContainerSrc src={`../assets/${image}`} alt={title}/>
        </ProductImageContainer>
    </figure>
    <aside>
    <ProductInfo>
            <h3>Dimention</h3>
            <label>{spec.dimensions}</label>
        </ProductInfo>
    {spec.capacity && 
        <ProductInfo>
        <h3>Capacity</h3>
        <label>{spec.capacity}</label>
        </ProductInfo>
        }
        <div className='category-product-info-features'>
            <ProductInfoHeader>Features</ProductInfoHeader>
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
            <button onClick={()=>addProduct({
              id,title,price
            })}>Add to Basket</button>

        </div>
    </aside>
    </article>
    
  )
}

export default CategoryProduct


const ProductTitle=styled.div`
  grid-column: 1 / span 3;
  color: darkslategray;
  font-size: 20px;
  font-weight: bold;
  padding-left: 10px;
`
const ProductImageContainer=styled.div`
padding: 10px;
width: 60px;
`

const ProductImageContainerSrc=styled.img`
  width: 100%;
  height: 100%;
`

const ProductInfo=styled.div`
display: flex;
flex-direction: column;
`
const ProductInfoHeader=styled.h3`
color: darkslategray;
  font-size: 15px;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 5px;
`
const ProductInfoListItem=styled.li`
padding-top: 5px;
`
const ProductInfoStock=styled.div`
padding-left: 10px;
  margin-top: 20px;
  padding-top: 10px;
  background-color: lightgray;
  height: 45%;
  width: 32%;
  border-radius: 5px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
`


