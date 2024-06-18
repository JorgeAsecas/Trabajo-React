import React from "react";
import donaciones from "./donaciones21"
import { Donacion } from "./Donacion";



export const ListaDona = () => {
    return (
        <div className="Lista-Dona" >
            {
                donaciones.map((product, idx)=> {
                    return <Donacion key={product.id} {...product} />
                })}

        </div>




    )





}
