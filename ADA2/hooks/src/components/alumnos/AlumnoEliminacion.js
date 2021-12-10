import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function AlumnoEliminacion (props) {
  const [alumno, setAlumno] = useState([]);
  
  const alumnoId = props.match.params.id;
  const matricula = useRef();
  const nombre = useRef();
  const procedencia = useRef();

  useEffect(() => {
    console.log('%cSe montó el componente', 'color: green');
    fetch('https://scpe-umt.herokuapp.com/alumnos/get/' + alumnoId)
      .then(response => response.json())
      .then(data => {
        setAlumno(data.data)
      })
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    console.log('%cSe actualizó el componente', 'color: yellow');
    matricula.current.innerText = 'Matrícula: ' + alumno.id;
    nombre.current.innerText = 'Nombre: ' + alumno.nombre;
    procedencia.current.innerText = 'Procedencia: ' + alumno.procedencia;
  }, [alumno])

  useEffect(() => {
    return () => console.log('%cSe desmontó el componente', 'color: red');
  }, [])
  
  const eliminacionAlumno = () => {
    let url = "https://scpe-umt.herokuapp.com/alumnos/delete/" + alumnoId;
      axios.delete(url)
		    .then(response => {
			    Swal.fire({
            title: 'Eliminación de Alumno',
            text: 'El alumno ha sido removido de la base de datos exitosamente...',
            icon: 'success',
            showConfirmButton: false,
            footer: '<a href="/">Aceptar</a>'
          })
		    })
  }

  return(
    <section className="alumno-form">
      <br />
      <h2>Edición de Alumno</h2>
      <hr align="center" noshade="noshade" size="10"  width="80%" />

      <div ref={ matricula } class="alert alert-info"></div>
      <br />
      <div ref={ nombre } class="alert alert-info"></div>
      <br />
      <div ref={ procedencia } class="alert alert-info"></div>
      <br />
      <button type="submit" class="btn btn-primary" onClick={ eliminacionAlumno }>Eliminar</button>
    </section>
  )
}

export default AlumnoEliminacion;
  