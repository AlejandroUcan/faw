Instrucciones de cómo utilizar la aplicación. 
/*------------                        Instalación                        ------------*/
   1. Dado el link del reposotorio ADAs, se debe clonar de forma local
      por medio del comando git clone https://github.com/AlejandroUcan/faw.git
   2. Una vez clonado debe dirigirse a la ubicación del ADA3/simpleForm, estando allí 
      se deben iniciar el servidor por medio del comando python manage.py runserver

/*------------                           Uso                            ------------*/
   * Al iniciar la aplicación, se carga la vista alumno_control, estando allí 
     se brindan las acciones Nuevo Registro, y una lista de acciones de los solicitantes 
     (Sin desarrollar, por el momento ). Se debe dar click en la accion Nuevo Registro
     
   * alumno_registro - En esta vista se ingresan los valores de los campos 
     [matricula, nombre, fecha nacimiento y procedencia], una vez ingresados 
     se da click en Registrar,para posteriormente redirigirse a la vista alumno_datos.
   
   * alumno_datos - En esta vista se muestran los valores previamente ingresados en el formulario, 
     adicionalmente se muestra el resultado del cálculo de la diferencia entre la fecha actual y 
     la de nacimiento.