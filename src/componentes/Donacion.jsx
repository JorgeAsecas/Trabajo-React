import React, { useContext } from "react";
import { CarritoContext } from "./CarritoTiendaContext";

export const Donacion = ({name,price,id,imgUrl}) => {

    const [carrito, setCarrito] = useContext(CarritoContext)

    const addToCart = () => {
        setCarrito((currObj) => {
            const isObjFound = currObj.find((obj) => obj.id === id);
            currObj.find((obj) => obj.id === id)
            if(isObjFound){
                return currObj.map((obj) => {

                    if (obj.id === id){
                        return {...obj, quantity: obj.quantity + 1}

                    }
                    else{
                        return obj
                    }
                })
            }else {
                return [...currObj, { id, quantity: 1, price}]
            }

        });

    };

    const removeFromCart = () => {
        setCarrito((currObj) => {
            if(currObj.find((obj) => obj.id === id)?.quantity === 1) {
                return currObj.filter((obj) => obj.id !== id)
            } else {
                return currObj.map((obj) => {
                    if(obj.id === id) {
                        return { ...obj, quantity: obj.quantity -1 }
                    }else {
                        return obj;
                    }
                })
            }
        } )
    }

    const getCantidad = (id) => {
        return carrito.find((obj) => obj.id === id)?.quantity || 0
}

    const CantidadPorItem = getCantidad(id)


    return(<div className="donacion-objeto" >
        {
            CantidadPorItem > 0 && (
                <div>{CantidadPorItem}</div>
            )}
        <div>{name}</div>
        <div className="precio-dona" >${price}</div>
        <div>
            {
                CantidadPorItem === 0 ? (
                    <button onClick={() => addToCart()} >
            Añadir donacion
            </button>
                ) : (
                    <button onClick={() => addToCart()} >
            Añadir mas
            </button>
                )
            }
            {
                CantidadPorItem > 0 && (
                    <button onClick={() => removeFromCart()} >
            Eliminar
            </button>
                )
            }


        </div>
    </div>)

}
