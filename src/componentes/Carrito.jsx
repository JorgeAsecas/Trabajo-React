import React, {useContext} from "react";
import { Link, NavLink } from "react-router-dom";
import { CarritoContext } from "./CarritoTiendaContext";
import { CarritoTienda } from "./CarritoTienda";

export const Carrito = () => {
    const [carrito, setCarrito] = useContext(CarritoContext)
    const quantity = carrito.reduce((acc, curr) => {
        return acc + curr.quantity

    }, 0)
    const precioTotal = carrito.reduce((acc, curr) => {
        return acc + curr.quantity * curr.price;}, 0
    )

    return (
        <div className="carrito" >
            <Link to={"/carrito"}>
        <p className="letraCarrito" >Carrito: <span>{quantity}</span></p>
        <p className="prioCarrito" >Total: <span>${precioTotal}</span></p>
        </Link>
        </div>
    )
}
