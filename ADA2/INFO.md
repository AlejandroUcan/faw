Instrucciones de cómo utilizar la aplicación. 
/*------------                        Instalación                        ------------*/
   1. Dado el link del reposotorio ADAs, se debe clonar de forma local
      por medio del comando git clone https://github.com/AlejandroUcan/faw.git
   2. Una vez clonado debe dirigirse a la ubicación del ADA2/hooks, estando allí 
      se deben instalar los paquetes correspondientes por medio del comando npm install
   3. Después de instalar los paquetes basta con correr el comando npm start 

/*------------                           Uso                            ------------*/
   * Al iniciar la aplicación, se carga la vista AlumnoControl, estando allí se visualizan
     los registros en la API, y se brindan las acciones Editar y Eliminar registros. 
     Además el sistema brinda la posibilidad de agregar nuevos registros a la API.
   
   * AlumnoAgregacion - En esta vista se ingresan los valores de los campos 
     [matricula, nombre, fecha nacimiento y procedencia], una vez ingresados 
     se da click en Registrar,para posteriormente ingresar el registro a la API.
   
   * AlumnoEdicion - En esta vista se ingresan los valores a actualizar de los campos 
     [nombre y procedencia], una vez ingresados se da click en Editar, 
     para posteriormente actualizar el registro en la API.
   
   * AlumnoEliminacion - En esta vista se visualizan los datos del registro seleccionado, 
     una vez seguros de la acción se da click en Eliminar, 
     para posteriormente eliminar el registro en la API.