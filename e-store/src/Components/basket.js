import React,{useContext,useState,useEffect} from 'react'
import styled from 'styled-components'
import { cartContext } from '../contexts/cartContext';
import { Link,useNavigate} from 'react-router-dom';
import { DownIcon, TrashIcon, UpIcon } from './icons';
const Basket = () => {
  const[cartItems,setCartItems]=useState([])
  const navigate=useNavigate();
  const {
    getItems,
    clearBasket,
    increseQuantity,
    decreseQuantity,
    removeProduct
   } = useContext(cartContext)
  
   useEffect(()=>{
    // const cartItems=getItems()
    // setCartItems(cartItems)
    setCartItems(getItems());
   },[getItems])

 
  const renderCart=()=>{
    // const cartItems=getItems()
    // console.log(cartItems)
    if(cartItems.length > 0){
     return cartItems.map((p) =>
     <React.Fragment key={p.id}>
     <div>
      <Link to={window.location.origin +`/products/${p.id}`}>{p.title}</Link>
      </div>
     <BasketQty>
      {p.quantity}
      <UpIcon width={20} onClick={()=>setCartItems(increseQuantity({id:p.id}))}></UpIcon>
      <DownIcon width={20} onClick={()=>setCartItems(decreseQuantity({id:p.id}))}></DownIcon>
      <TrashIcon width={20} onClick={()=>setCartItems(removeProduct({id:p.id}))}></TrashIcon>
     </BasketQty>
     <BasketPrice>&pound;{p.price}</BasketPrice>
     </React.Fragment>
   );
    }else{
      return <div>the basket currently empty</div>
    }
   
    

  }

  const renderTotal=()=>{
    // const cartItems=getItems()

    const totaly=cartItems.reduce((total, item) => (total + item.price * item.quantity),0 );    
   
    // debugger;
    return totaly
  }

  return (
    <BasketContainer>
      <BasketTitle>Shoping Basket</BasketTitle>
      <BasketButton onClick={()=> navigate('/checkout')}>CheckOut</BasketButton>
      
      <BasketTable>
        <BasketHeader>
            <h4>Items</h4>
            <h4>Quentity</h4>
            <h4>Price</h4>
          </BasketHeader>
          <BasketHeaderLine/>
          <BasketHeader>
            {renderCart()}
            </BasketHeader>
          <BasketHeaderLine/>
          {/* <BasketButton onClick={()=>clearBasket()}>Clear</BasketButton> */}
          <BasketButton onClick={()=>setCartItems(clearBasket())}>Clear</BasketButton>
          <BasketTotal>Total:{renderTotal()}</BasketTotal>
      </BasketTable>
    </BasketContainer>
  )
}

export default Basket

const BasketContainer=styled.div`
display: grid;
height: 10px;
grid-template-rows: 0.5fr 1fr 0.5fr;
grid-template-columns: 0.1fr 1fr 0.1fr;
`

const BasketTable=styled.div`

grid-column: 1 / 4;
grid-template-rows: 0.25fr 1fr 0.25fr 0.25fr;
column-gap: 30px;
padding-left: 10px;
 `

const BasketHeader=styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);

`

const BasketHeaderLine=styled.hr`
margin-bottom: 20px;
border: 1px solid gray;
`
const BasketTitle=styled.h2`
grid-column: 1 / span 2;
padding-bottom: 20px;
`
const BasketQty=styled.h3`
font-size:16px ;
font-weight: bold;
display: grid;
grid-template-columns: 0.01fr 0.05fr 0.1fr 0.1fr;
padding-right: 20px;

`
const BasketPrice=styled.h3`
font-size:16px ;
font-weight: bold;
`
// const BasketItems=styled.h3`
// font-size:16px ;
// font-weight: bold;
// `
const BasketTotal=styled.h2`
justify-self: end;
`
const BasketButton=styled.button`
justify-self: end;
height: 40px;
`





// <BasketButton onClick={()=>clearBasket()}>Clear</BasketButton>
