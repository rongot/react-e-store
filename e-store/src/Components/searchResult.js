import React,{useState} from 'react'
import { getProductsByQuary } from '../Helper/fetcher'
import { useSearchParams } from 'react-router-dom'
import CategoryProduct from './category_product'

function SearchResults() {
    const[products,setProdeucts]=useState({erorMassege:"",data:[]})
    const [searchParams]=useSearchParams();
    const quary=searchParams.get('s')

    React.useEffect(()=>{
        const fetchData=async()=>{
        const responseObject= await getProductsByQuary(quary)
        setProdeucts(responseObject)
        }
        fetchData()
    },[quary])

    const renderProducts=()=>{
        if(products.data.length > 0){
          return products.data.map((p)=>(
          <CategoryProduct key={p.id} {...p}>
            {p.title}
          </CategoryProduct>
             ))
         }
         else{
            return <div id="emptyResult">NO RESULTS FOUND</div>
         }
        }

  return (
    <div>
      {/* <div key={id} onClick={()=>onCategoryClick(id)}>{title}</div> */}
    { products.erorMassege && <div>ERROR:{products.erorMassege}</div> }
    {renderProducts()}
    </div>
  )
}

export default SearchResults
