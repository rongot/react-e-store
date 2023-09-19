import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import { CartIcon, HomeIcon } from './icons'
import Search from './search'
// import Home from './home'

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
    <header>
      <div id='HeaderHomeIcon'>
      <Link to='/' > <HomeIcon width={40}></HomeIcon></Link> 
      </div>
      <Search></Search>
      <div id='HeaderTitle'>Our Store</div>
      <div id='HeaderCartIcon'>
       <Link to='/basket' >< CartIcon width={40}></CartIcon></Link> 
        </div>

    </header>
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
