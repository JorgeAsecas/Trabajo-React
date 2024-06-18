import React, { useState, useEffect } from 'react';
import '../imagenes.css';

const ImagenesDesdeCarpeta = () => {
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    const obtenerImagenes = async () => {
      try {
        const respuesta = await fetch('/imagenes.json');
        if (!respuesta.ok) {
          throw new Error('Error al obtener nombres de imágenes');
        }
        const nombresDeImagenes = await respuesta.json();
        setImagenes(nombresDeImagenes);
      } catch (error) {
        console.error('Error al obtener nombres de imágenes:', error);
      }
    };

    obtenerImagenes();
  }, []);

  return (
    <div>
      {imagenes.map((nombre, index) => (
        <img key={index} src={`/images/${nombre}`} alt={`Imagen ${index}`} className="imagen" />
      ))}
    </div>
  );
};

export default ImagenesDesdeCarpeta;
