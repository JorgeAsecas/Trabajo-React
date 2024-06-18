import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CarritoContext } from "./CarritoTiendaContext";

export const CarritoTienda = () => {
    const [carrito, setCarrito] = useContext(CarritoContext)
    const quantity = carrito.reduce((acc, curr) => {
        return acc + curr.quantity

    }, 0)

    const precioTotal = carrito.reduce((acc, curr) => {
        return acc + curr.quantity * curr.price;}, 0
    )

    return <div className="carritoFinal" >

    <div><h1>Total de donaciones: </h1> {quantity}</div>
    <div><h1>Precio total: </h1> ${precioTotal} </div>
    <button onClick={() => console.log(carrito)} >Comprar</button>
    <br/>
    <Link to={"/donaciones"}>
      <button>
        Volver
      </button>
      </Link>

    </div>
}
