import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function AlumnoEdicion (props) {
  const [alumno, setAlumno] = useState([]);
  
  const alumnoId = props.match.params.id;
  const matricula = useRef();
  const nombre = useRef();
  const nombreErrorMsg = useRef();
  const procedencia = useRef();
  const procedenciaErrorMsg = useRef();

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
    nombre.current.value = alumno.nombre;
    procedencia.current.value = alumno.procedencia;
  }, [alumno])

  useEffect(() => {
    return () => console.log('%cSe desmontó el componente', 'color: red');
  }, [])
  
  const edicionAlumno = () => {
    let errores = [];

    if (nombre.current.value === '') {
      nombre.current.classList.add('is-invalid');
      nombreErrorMsg.current.innerText = 'Debe ingresar un valor al campo nombre';
      errores.push('Debe ingresar un valor al campo nombre');
    } else {
      nombreErrorMsg.current.innerText = '';
      nombre.current.classList.remove('is-invalid');
      nombre.current.classList.add('is-valid');
    }
    
    if (procedencia.current.value === '') {
      procedencia.current.classList.add('is-invalid');
      procedenciaErrorMsg.current.innerText = 'Debe ingresar un valor al campo procedencia';
      errores.push('Debe ingresar un valor al campo procedencia');
    } else {
      procedenciaErrorMsg.current.innerText = '';
      procedencia.current.classList.remove('is-invalid');
      procedencia.current.classList.add('is-valid');
    }

    if(errores.length > 0) {
      Swal.fire({
        title: 'Registro de Alumno',
        text: 'El alumno no ha podido ser agregado...',
        icon: 'error'
      })
    } else {
      let edicionUsuario = {
        nombre: nombre.current.value,
        procedencia:procedencia.current.value
      }

      let url = "https://scpe-umt.herokuapp.com/alumnos/update/" + alumnoId;
      axios.put(url, edicionUsuario)
		    .then(response => {
			    Swal.fire({
            title: 'Edición de Alumno',
            text: 'Datos del alumno actualizados exitosamente...',
            icon: 'success',
            showConfirmButton: false,
            footer: '<a href="/">Aceptar</a>'
          })
		    })
    }
  }

  return(
    <section className="alumno-form">
      <br />
      <h2>Edición de Alumno</h2>
      <div ref={ matricula } class="alert alert-info">Matrícula: </div>
      <hr align="center" noshade="noshade" size="10"  width="80%" />
          
      <div class="form-row justify-content-center">
        <div class="form-group col-md-7">
          <label for="inputPassword4">Nombre</label>
          <input ref={ nombre } type="text" class="form-control"/>
          <i ref={ nombreErrorMsg }></i>
        </div>
        <br />

        <div class="form-group col-md-7">
          <label for="inputPassword4">Procedencia</label>
          <input ref={ procedencia } type="text" class="form-control"/>
          <i ref={ procedenciaErrorMsg }></i>
        </div>
      </div>
      
      <button type="submit" class="btn btn-primary" onClick={ edicionAlumno }>Editar</button>
    </section>
  )
}

export default AlumnoEdicion;