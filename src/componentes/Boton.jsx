import React from 'react';
import { Link, NavLink } from "react-router-dom";

class BotonDonacion extends React.Component {


  render() {
    return (
      <Link to={"/donaciones"}>
      <button className='donacion' >
        Hacer Donación
      </button>
      </Link>
    );
  }
}

export default BotonDonacion;
