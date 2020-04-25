import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/scss/main.scss";


function App() {
  return (
    <div className="App">
         <BrowserRouter>
          <Switch>
              <Route exact path="/jarsSystem" component={Home}/>
          </Switch>
        </BrowserRouter> 
    </div>
  );
}

export default App;
