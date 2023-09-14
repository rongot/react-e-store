import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import Home from './home'

const Layout = ({categories}) => {

    const renderCategories=()=>{
        const category=[]
        for (let index = 0; index < categories["data"].length; index++) {
          category.push(
          <li key={categories["data"][index].id}><Link to={`/categories/${categories["data"][index].id}`}>{categories["data"][index].title}</Link></li>
              )
        }
        return category
      }

return (
   <React.Fragment>
    <header>My Store</header>
        <section>
            <nav>
            { categories.erorMassege && <div>ERROR:{categories.erorMassege}</div> }
                <ul>{ categories.data && renderCategories() }</ul>
            </nav>
      <main>
         <Outlet/>
      </main>
    </section>
    {<footer><Link to="/">Home</Link> | <Link to="/basket">Basket</Link></footer>}
   </React.Fragment>
  )
}

export default Layout
