import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

import "../src/scss/main.scss";


function App() {
  return (
    <div className="App">
         <BrowserRouter>
          <Switch>
              <Route exact path="/" component={Home}/>
          </Switch>
        </BrowserRouter> 
    </div>
  );
}

export default App;
