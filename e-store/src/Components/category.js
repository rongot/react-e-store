import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../Helper/fetcher'
import CategoryProduct from './category_product'

function Category({id,title,onCategoryClick}) {
  const[products,setProducts]=useState({erorMassege:"",data:[]})
  const { categoryId }=useParams()

  React.useEffect(()=>{
    const fetchData=async()=>{
    const responseObject= await getProduct(categoryId)
    setProducts(responseObject)
    }
    fetchData()
},[categoryId])

const renderProducts=()=>{
  console.log(products.data)
  return products.data.map((p)=>(
    <CategoryProduct key={p.id} {...p}>
      {p.title}
    </CategoryProduct>
  ))
  }

  return (
    <div>
      {/* <div key={id} onClick={()=>onCategoryClick(id)}>{title}</div> */}
    { products.erorMassege && <div>ERROR:{products.erorMassege}</div> }
    <h1>products</h1>
    {products.data && renderProducts()}
    </div>
  )
}

export default Category
