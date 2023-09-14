import React ,{createContext} from "react";


export const cartContext=createContext();

const initialState={"cartItems":[]}

const cartContextProvider=({children})=>{
    return (
        <cartContext.Provider value={initialState}>
            {children}
        </cartContext.Provider>
    )
}

export default cartContextProvider;