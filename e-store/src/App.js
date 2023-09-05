import React, { useState } from 'react';
import './App.css';
import Category from './Components/category';
import { getCatgories,getProduct } from './Helper/fetcher';

function App() {
  const[categories,setCategories]=useState({erorMassege:"",data:[]})
  const[products,setProducts]=useState({erorMassege:"",data:[]})
  
  // const

React.useEffect(()=>{
  const fetchData=async()=>{
  const responseObject= await getCatgories()
  setCategories(responseObject)
  }
  fetchData()
  //  const data=fetcher("categories")
  
    
    
},[])
const handleCategotyClick=(id)=>{
  const fetchData=async()=>{
    const responseObject= await getProduct(id)
    setProducts(responseObject)
    }
    fetchData()

  // fetch("http://localhost:5000/products?catId="+id)
  // .then(res => res.json())
  // .then(data=>{
  // setProducts(data)
  // })
  
  }
const renderCategoty=()=>{
  const category=[]
  for (let index = 0; index < categories["data"].length; index++) {
    category.push(
       <Category 
       key={categories["data"][index].id} id={categories["data"][index].id} title={categories["data"][index].title} onCategoryClick={()=>handleCategotyClick(categories["data"][index].id)}
        ></Category>)
  }
  console.log(category)
  return category
}
const renderProducts=()=>{
  const product=[]
  for (let index = 0; index < products["data"].length; index++) {
    product.push(<div>{products["data"][index].title}</div>)
    
  }
  console.log(product)
  return product
}




  return (
<React.Fragment>


<header>My Store</header>

<section>
  <nav>
  { categories.erorMassege && <div>ERROR:{categories.erorMassege}</div> }
  { categories.data && renderCategoty() }

  </nav>
  <article>
  { categories.erorMassege && <div>ERROR:{categories.erorMassege}</div> }
    <h1>products</h1>
    {products.data && renderProducts()}
  </article>
</section>
<footer>footer</footer>
    <div className="App">
     
    </div>
    </React.Fragment>
  );
}

export default App;
