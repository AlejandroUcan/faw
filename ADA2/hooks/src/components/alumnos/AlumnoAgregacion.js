import { useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function AlumnoAgregacion () {
  const matricula = useRef();
  const matriculaErrorMsg = useRef();
  const nombre = useRef();
  const nombreErrorMsg = useRef();
  const procedencia = useRef();
  const procedenciaErrorMsg = useRef();

  const registroAlumno = () => {
    let errores = [];

    if(matricula.current.value === '') {
      matricula.current.classList.add('is-invalid');
      matriculaErrorMsg.current.innerText = 'Debe ingresar un valor al campo matrícula';
      errores.push('Debe ingresar un valor al campo matrícula');
    } else {
      matriculaErrorMsg.current.innerText = '';
      matricula.current.classList.remove('is-invalid');
      matricula.current.classList.add('is-valid');
    }

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
      let nuevoUsuario = {
        id: matricula.current.value,
        nombre: nombre.current.value,
        procedencia:procedencia.current.value
      }

      let url = "https://scpe-umt.herokuapp.com/alumnos/create";
      axios.post(url, nuevoUsuario)
		    .then(response => {
			    Swal.fire({
            title: 'Registro de Alumno',
            text: 'El alumno ha sido agregado exitosamente...',
            icon: 'success',
            showConfirmButton: false,
            footer: '<a href="/">Aceptar</a>'
          })
		    })
    }
  }

  return (
    <section className="alumno-form">
      <br />
      <h2>Registro de Alumno</h2>
      <hr align="center" noshade="noshade" size="10"  width="80%" />
          
      <div class="form-row justify-content-center">
        <div class="form-group col-md-7">
          <label for="inputPassword4">Matrícula</label>
          <input ref={ matricula } type="number" class="form-control"/>
          <i ref={ matriculaErrorMsg }></i>
        </div>
        <br />

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
      
      <button type="submit" class="btn btn-primary" onClick={ registroAlumno }>Registrar</button>
    </section>
  );
}
  
  export default AlumnoAgregacion;
  