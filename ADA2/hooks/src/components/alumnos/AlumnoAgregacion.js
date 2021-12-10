import { useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function AlumnoAgregacion () {
  const matricula = useRef();
  const matriculaErrorMsg = useRef();
  const nombre = useRef();
  const nombreErrorMsg = useRef();
  const fechaNacimiento = useRef();
  const fechaNacimientoErrorMsg = useRef();
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

    if (fechaNacimiento.current.value === '') {
      fechaNacimiento.current.classList.add('is-invalid');
      fechaNacimientoErrorMsg.current.innerText = 'Debe ingresar un valor al campo fecha nacimiento';
      errores.push('Debe ingresar un valor al campo fecha nacimiento');
    } else {
      fechaNacimientoErrorMsg.current.innerText = '';
      fechaNacimiento.current.classList.remove('is-invalid');
      fechaNacimiento.current.classList.add('is-valid');
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
      let fechaNac = fechaNacimiento.current.value;
      let hoy = new Date();
      let diaNacimiento = fechaNac.substring(8, 10);
      let mesNacimiento = fechaNac.substring(5, 7);
      let anioNacimiento = fechaNac.substring(0, 4);
      let nacimiento = new Date(anioNacimiento, mesNacimiento-1, diaNacimiento, 7, 25);
      let diferencia = hoy - nacimiento;

      if(diferencia > 0) {    
        let diasVividos = parseInt(diferencia/86400000);
        let restanteDias = diferencia - diasVividos*86400000;
        let horasVividas = parseInt(restanteDias/3600000);
        let restanteMinutos = restanteDias - horasVividas*3600000;
        let minutosVividos = parseInt(restanteMinutos/60000);

        let proximoAnio = hoy.getFullYear() + 1;
        let fechaCumpleanos = new Date(proximoAnio, mesNacimiento-1, diaNacimiento, 7, 25);
        let tiempoCumpleanos = fechaCumpleanos - hoy;
        let diasRestantes = parseInt(tiempoCumpleanos/86400000);
        let restanteDiasCumple = tiempoCumpleanos - diasRestantes*86400000;
        let horasRestantes = parseInt(restanteDiasCumple/3600000);

        let nuevoUsuario = {
          id: matricula.current.value,
          nombre: nombre.current.value,
          procedencia:procedencia.current.value
        }
        let url = "https://scpe-umt.herokuapp.com/alumnos/create";
        axios.post(url, nuevoUsuario)
          .then(response => {
            Swal.fire({
              title: '<strong>Formulario de información personal</strong>',
              icon: 'info',
              html:
                'El ser humano <b>' + nombre.current.value + '</b> ha vivido un total de: <br>' +
                '<b>' + diasVividos + '</b> días <br> <b>' + horasVividas + '</b> horas <br> <b>' + minutosVividos + '</b> minutos <br><br>' +
                'Su procedencia es: <b>' + procedencia.current.value + '</b> <br><br>' +
                'Faltan <b>' + diasRestantes + '</b> días, <b>' + horasRestantes + '</b> horas para su cumpleaños',
              footer: '<a href="/">Aceptar</a>',
              showConfirmButton: false
            })
          })
      } else {
        alert('Usted aún no ha nacido');
      }
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
          <label for="inputPassword4">Fecha de Nacimiento</label>
          <input ref={ fechaNacimiento } type="date" class="form-control"/>
          <i ref={ fechaNacimientoErrorMsg }></i>
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
  