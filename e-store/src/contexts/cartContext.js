import React ,{createContext,useReducer} from "react";
import { CartReducer } from "./cartReducer";


export const cartContext=createContext();

const Storage=localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("caer")) : []
const initialState={"cartItems":Storage}


const CartContextProvider=({children})=>{
    const [state,dispatch]=useReducer(CartReducer,initialState)

        const addProduct=payload =>{
            dispatch({type:"ADD", payload})
            return state.cartItems;
       }
        const removeProduct=payload =>{
            dispatch({type:"REMOVE",payload})
            return state.cartItems;
        }
        const increseQuantity=payload =>{
            dispatch({type:"INQUENTITY",payload})
            return state.cartItems;
        }
        const decreseQuantity=payload =>{
            dispatch({type:"DEQUENTITY",payload})
            return state.cartItems;
        }
        const clearBasket=() =>{
        dispatch({type:"CLEAR",payload:undefined})
        return state.cartItems;
        }
        const getItems=() =>{
        return state.cartItems
        }

        const contextValues={
        addProduct,
        removeProduct,
        decreseQuantity,
        increseQuantity,
        clearBasket,
        getItems,
        // ...initialState
        ...state
        }

            return (
                <cartContext.Provider value={contextValues}>
                {children}
                </cartContext.Provider>
            )
}

export default CartContextProvider;