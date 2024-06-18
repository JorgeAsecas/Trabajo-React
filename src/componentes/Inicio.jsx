import React, { useEffect } from "react";
import ImagenesDesdeCarpeta from './ImagenesDesdeCarpeta';

export const Inicio = () => {
useEffect(() => {
const h2Elements = document.querySelectorAll('.h2');
const bloqueElements = document.querySelectorAll('.bloque');

h2Elements.forEach((h2, i) => {
    h2.addEventListener('click', () => {
        bloqueElements.forEach((bloque, j) => {
            bloqueElements[j].classList.remove('activoo');
        });
        bloqueElements[i].classList.add('activoo');
    });
});


return () => {
    h2Elements.forEach((h2, i) => {
        h2.removeEventListener('click', () => {
            bloqueElements.forEach((bloque, j) => {
                bloqueElements[j].classList.remove('activoo');
            });
            bloqueElements[i].classList.add('activoo');
        });
    });
};
}, []);

return (
<section className="sec">
    <div className="acordeon">
        <div className="bloque">
            <article className="primero">
                <div>
                    <h2 className="hh12 h2">Bienvenidos a ANIMALES SANLUCAR</h2>
                </div>
                <p className="contenido">

                    ANIMALES SANLUCAR es una asociación sin ánimo de lucro, legalmente constituida, cuyos
                    objetivos principales son: <br/><br/>
                    ---Denunciar el abandono y maltrato de los animales y promover su defensa.---<br/><br/>
                    ---Rescatar y cuidar de perros y gatos abandonados así como cualquier animal necesitado y buscarles
                    familias adoptantes.---<br/><br/><br/>
                    Somos una asociación totalmente independiente cuya única<br/>
                    fuente de financiación son las cuotas de los colaboradores y los donativos.<br/>
                    Nuestra asociación pone especial empeño en proteger aquellos animales que son peor tratados por la
                    sociedad, por motivos de edad, raza o enfermedad.
                </p><br/>
            </article>
        </div>
        <div className="bloque">
            <article className="tercero">
                <p ></p>
                <h2 className="hh12 h2" >ANIMALES EN ADOPCION</h2>
                <div className="contenido">
                    <a className="tooltip" href="paginas/animal.html">
                    <ImagenesDesdeCarpeta />
                        <span className="tooltip-text">
                            <p> Parvati <br/> Un animal con mucho cariño para dar </p>
                        </span>
                    </a>
                    <a className="tooltip" href="paginas/animal.html">
                    <ImagenesDesdeCarpeta />
                        <span className="tooltip-text">
                            <p> Parvati <br/> Un animal con mucho cariño para dar </p>
                        </span>
                    </a>
                    <a className="tooltip" href="paginas/animal.html">
                    <ImagenesDesdeCarpeta />
                        <span className="tooltip-text">
                            <p> Parvati <br/> Un animal con mucho cariño para dar </p>
                        </span>
                    </a>



                </div>
            </article>
        </div>
    </div>
</section>
)}
