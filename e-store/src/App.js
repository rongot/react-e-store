import React, { useState } from 'react';
import './App.css';
import Category from './Components/category';

function App() {
  const[categories,setCategories]=useState([])
  const[products,setProducts]=useState([])
  
  // const

React.useEffect(()=>{
  fetch("http://localhost:5000/categories")
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    setCategories(data)
  })
  
},[])
const handleCategotyClick=(id)=>{
  fetch(`http://localhost:5000/products?catId=${id}`)
  .then(res => res.json())
  .then(data=>{
  console.log(data)
  setProducts(data)
  })
  
  }
const renderCategoty=()=>{
  const category=[]
  for (let index = 0; index < categories.length; index++) {
    category.push(
       <Category 
       key={categories[index].id} id={categories[index].id} title={categories[index].title} onCategoryClick={()=>handleCategotyClick(categories[index].id)}
        ></Category>)
  }
  // console.log(category)
  return category
}

  return (
<React.Fragment>


<header>My Store</header>

<section>
  <nav>
  {
        categories && renderCategoty()
  }

  </nav>
  <article>main area</article>
</section>
<footer>footer</footer>
    <div className="App">
     
    </div>
    </React.Fragment>
  );
}

export default App;
