import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
    return(
        <div>
        <header>
        <nav>


        <Link to={"/"}>
            <a><img src="src/assets/logo.png" alt="Animales Sanlucar logo" width="70"
                    height="70"/></a>
                    </Link>
            <ul>
            <Link to={"/"}>
                <li><a>Inicio</a></li>
                </Link>
                <Link to={"/adopta"}>
                <li><a>Adopta</a></li>
                </Link>
                <Link to={"/finalesfelices"}>
                <li><a>Finales Felices</a></li>
                </Link>
                <Link to={"/contacto"}>
                <li><a>Contacto</a></li>
                </Link>
                <Link to={"/nosotros"}>
                <li><a>Sobre nosotros</a></li>
                </Link>
            </ul>
        </nav>

    </header>
    <div class="container portada">
        <img src="src/assets/animals_dog.svg"  class="svg1" alt="Imagen Portada perro"/>

        <img src="src/assets/animals_cat.svg"  class="svg2" alt="Imagen Portada gato"/>


    </div>
    </div>
    )

}
