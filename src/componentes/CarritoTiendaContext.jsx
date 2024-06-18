import React, { createContext, useState } from "react";

export const CarritoContext = createContext(null)

export const CarritoTiendaProvider = ({ children }) => {
    const [ carrito, setCarrito] = useState([])

    return(
        <CarritoContext.Provider value={[carrito, setCarrito]}>
            {children}

        </CarritoContext.Provider>
    )


}
