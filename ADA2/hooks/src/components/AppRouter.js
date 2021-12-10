import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';

import AlumnoControl from './alumnos/AlumnoControl'; 
import AlumnoAgregacion from "./alumnos/AlumnoAgregacion";
import AlumnoEdicion from "./alumnos/AlumnoEdicion";
import AlumnoEliminacion from "./alumnos/AlumnoEliminacion";
import NotFound from './NotFound';

function AppRouter(){
  return(
    <React.Fragment>
    
      <Accordion className="menu-accordion">
        <Accordion.Item>
          <Accordion.Header>
            <div className="boton-accordion">
              <Link className="nav-link" to="/">
                <i className="fas fa-fw fa-tachometer-alt"></i>
              </Link>
              <span className="menu-titulo">SGE Admin</span>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <Link className="dropdown-link" to="/AlumnoAgregacion">
              <i className="fas fa-fw fa-chart-area"></i>
              <span>Añadir</span>
            </Link>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Switch>
        <Route exact path="/" component={ AlumnoControl } />
        <Route exact path="/AlumnoAgregacion" component={ AlumnoAgregacion } />
        <Route exact path="/AlumnoEdicion/:id" component={ AlumnoEdicion } />
        <Route exact path="/AlumnoEliminacion/:id" component={ AlumnoEliminacion } />
        <Route component={ NotFound } />
      </Switch>
    </React.Fragment>
  )
}

export default AppRouter;