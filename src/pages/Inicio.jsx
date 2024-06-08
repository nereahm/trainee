import React from 'react'
import { Link } from 'react-router-dom';


function Inicio() {
  return (
    <div className="inicio">
      <div className="fondoInicio">
        <div className="contenidoInicio">
          <h1 className="titulo__contenidoInicio">Si necesitas inspiración...</h1>
          <Link to={'/galeria'}><button type='button' className='boton__contenidoInicio'>Click aquí</button></Link>
        </div>
      </div>
    </div>
      )
}

export default Inicio