import { useEffect, useState } from 'react';
import AlumnoRegistro from './AlumnoRegistro';

import "../../index.css";

function AlumnoControl () {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    console.log('%cSe montó el componente', 'color: green');
    fetch('https://scpe-umt.herokuapp.com/alumnos/read')
      .then(response => response.json())
      .then(data => {
        setAlumnos(data.data)
      })
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    console.log('%cSe actualizó el componente', 'color: yellow');
  }, [alumnos])

  useEffect(() => {
    return () => console.log('%cSe desmontó el componente', 'color: red');
  }, [])

  return(
    <div className='lista-de-alumnos'>
        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
          <thead>
            <tr>
              <th scope="col">Matrícula</th>
              <th scope="col">Nombre</th>
              <th scope="col">Procedencia</th>
              <th colspan="2">Acciones</th>
            </tr>
          </thead>
          <tbody> { alumnos.map( ( row , i) => { return <AlumnoRegistro { ...row} key={i}/> }) } </tbody> 
        </table>
    </div>
  )
}

export default AlumnoControl;