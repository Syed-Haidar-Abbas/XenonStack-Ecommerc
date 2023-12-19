import React, { createContext } from "react"

import allproduct from "../Components/Assets/allproduct";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

const contextValue = {allproduct};

return (

    <ShopContext.Provider value={contextValue}> 
        {props.children}
    </ShopContext.Provider>

)

}

export default ShopContextProvider;