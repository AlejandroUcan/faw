import React from 'react';
import './assets/css/app.css';

import AppRouter from './components/AppRouter';

function App() {
  return (
    <React.Fragment>
      <div>
        <AppRouter />
      </div>
    </React.Fragment>
  );
}

export default App;
