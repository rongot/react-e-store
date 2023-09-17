import React ,{createContext,useReducer} from "react";
import { CartReducer } from "./cartReducer";


export const cartContext=createContext();

const initialState={"cartItems":[]}

const CartContextProvider=({children})=>{
    const [state,dispatch]=useReducer(CartReducer,initialState)

        const addProduct=payload =>{
            dispatch({type:"ADD", payload})
       }
        const removeProduct=payload =>{
            dispatch({type:"REMOVE",payload})
        }
        const increseQuantity=payload =>{
            dispatch({type:"INQUENTITY",payload})
        }
        const decreseQuantity=payload =>{
            dispatch({type:"DEQUENTITY",payload})
        }
        const clearBasket=() =>{
        dispatch({type:"CLEAR",payload:undefined})
        }
        const getItem=() =>{
        return state.cartItems
        }

        const contextValues={
        addProduct,
        removeProduct,
        decreseQuantity,
        increseQuantity,
        clearBasket,
        getItem,
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