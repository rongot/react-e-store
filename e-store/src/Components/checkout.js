import React,{useState} from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom';

const Checkout = () => {
  const navigate=useNavigate()
  const [form,SetForm]=useState({
    name:'',
    email:"",
    shippingAddress1:"",
    touched:{
      name:false,
      email:false,
      shippingAddress1:false
    }

  })
  const errors = {
    name:form.name.length === 0,
    email:form.email.length === 0,
    shippingAddress1:form.shippingAddress1.length === 0
    }
    const disabled =Object.keys(errors).some((x)=>errors[x])

  // const confirmOrder=(ev)=>{
  //   navigate('/orderConfirmation')
  // }
  const handleChange=(ev)=>{
    const {name,value}=ev.target;
    SetForm((prevState) => {
      return {
        ...prevState,
        [name]:value
      }
    })
  }
//ev = event
  const handleSubmit=(ev)=>{
    // console.log(form.name)
    if(disabled){
      ev.preventDefault()
      return;
    }
    navigate('/orderConfirmation')
  }
  // const formInValid=()=>{
  //   const errors = {
  //     name:form.name.length === 0,
  //     email:form.email.length === 0,
  //     shippingAddress1:form.shippingAddress1.length === 0
  //     }
  //     const disabled =Object.keys(errors).some((x)=>errors[x])
  //     return disabled
  // }

  const handleBlur=(ev)=>{
    const {name}=ev.target;
    SetForm((prevState) => {
      return {
        ...prevState,
       touched:{
        ...form.touched,
        [name]:true

      }
      }
    })
  }
 
  
  return (
    <form onSubmit={handleSubmit}>
    <CheckoutContainer>
      <CheckoutTitle>Shoping CheckOut</CheckoutTitle>
      <CheckoutHeader>
        <h4>Your Details</h4>
      </CheckoutHeader>
      <CheckoutHeaderLine/>
      <CheckoutTable>
         <CheckoutFormLabel>Name *</CheckoutFormLabel>
         <CheckoutFormInput 
           type='texr' 
           name='name' 
           onChange={handleChange} 
           placeholder='enter name' 
           invalid={errors["name"]}
           onBlur={handleBlur}
           />
         <CheckoutFormLabel>Email *</CheckoutFormLabel>
         <CheckoutFormInput
             type='texr' 
             name='email' 
             onChange={handleChange} 
             placeholder='enter email'  
             invalid={errors["email"]}
             />
      </CheckoutTable>
      <CheckoutHeader><h4>Address details</h4></CheckoutHeader>
      <CheckoutHeaderLine/>
      <CheckoutTable>
        <CheckoutFormLabel>Copy to shipping</CheckoutFormLabel>
        <CheckoutFormCheckbox type='checkbox' />
        <CheckoutFormLabel>billing address</CheckoutFormLabel>
        <CheckoutAddress>
          <input type='text' name='billingAddress1'></input>
          <input type='text' name='billingAddress2'></input>
          <input type='text' name='billingCity'></input>
        </CheckoutAddress>
        <CheckoutFormLabel>Shipping address *</CheckoutFormLabel>
        <CheckoutAddress>
          <CheckoutFormInput 
            type='text' 
            name='shippingAddress1' 
            onChange={handleChange} 
            placeholder='enter shipping Address' 
            invalid={errors["shippingAddress1"]}
            />
          <input type='text' name='shippingAddress2'></input>
          <input type='text' name='shippingCity'></input>
        </CheckoutAddress>
      </CheckoutTable>
      <CancelButton onClick={()=>navigate("/basket")}>Cancel</CancelButton>
      <CheckoutButton disabled={disabled} >Confirm Order</CheckoutButton>
    </CheckoutContainer>
    </form>
  )
}

export default Checkout

const CheckoutContainer=styled.div`
display: grid;
padding: 20px;
grid-template-rows: 0.25fr 1fr 0.25fr 0.25fr 0.25fr 0.5fr;
grid-template-columns: 0.1fr 1fr 0.1fr;
`

const CheckoutTable=styled.div`
display: grid;
grid-column: 1 / span 3;
grid-template-rows: repeat(4, 0.25fr);
grid-template-columns: 0.1fr 0.4fr 0.1fr 0.4fr;
column-gap: 30px;
padding-left: 10px;
 `

const CheckoutHeader=styled.div`
grid-column: 1 / span 3;
padding-top: 10px;
`
const CheckoutHeaderLine=styled.hr`
grid-column: 1 / span 3;
margin-bottom: 20px;
border: 1px solid gray;
`
const CheckoutTitle=styled.h2`
grid-column: 1 / span 2;
padding-bottom: 20px;
`
const CheckoutAddress=styled.div`
display: grid;
grid-template-rows: repeat(4, 0.25fr);
grid-template-columns: 1fr;
column-gap: 20px;
`
const CheckoutFormLabel=styled.label`
justify-self: end;
`
const CheckoutFormInput=styled.input`
border-color:${(props)=>(props.invalid ? "red" : "black" )};
border-widht:${(props)=>(props.invalid ? "3px" : "1px" )};
border-style: solid;
`
const CheckoutFormCheckbox=styled.input`
grid-column: 2 / span 3;
justify-self: start;
margin-bottom: 20px;
`

const CheckoutButton=styled.button`
border-radius: 8px;
height: 40px;
width: 80px;
grid-column: 3;
`
const CancelButton=styled.button`
border-radius: 8px;
height: 40px;
width: 60px;
grid-column: 1;
`

