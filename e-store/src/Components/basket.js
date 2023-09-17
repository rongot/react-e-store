import React from 'react'
import styled from 'styled-components'
const Basket = () => {
  return (
    <BasketContainer>
      <BasketTitle>Shoping Basket</BasketTitle>
      <BasketButton>CheckOut</BasketButton>
      
      <BasketTable>
        <BasketHeader>
            <h4>Items</h4>
            <h4>Quentity</h4>
            <h4>Price</h4>
          </BasketHeader>
          <BasketHeaderLine/>
          <BasketHeader>Cart Item</BasketHeader>
          <BasketHeaderLine/>
          <BasketButton>Clear</BasketButton>
          <BasketTotal>Total:0</BasketTotal>
      </BasketTable>
    </BasketContainer>
  )
}

export default Basket

const BasketContainer=styled.div`
display: grid;
height: 10px;
grid-template-rows:repeat(3, 1fr);
grid-template-columns: repeat(3, 1fr);
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
font-size:10px ;
font-weight: bold;
display: grid;
grid-template-columns: 0.01fr 0.05fr 0.1fr 0.1fr;
`
const BasketPrice=styled.h3`
font-size:10px ;
font-weight: bold;
`
const BasketTotal=styled.h2`
justify-self: end;
`
const BasketButton=styled.button`
justify-self: end;
height: 40px;
`






