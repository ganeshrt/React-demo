import { ErrorBoundry } from "./components/ErrorBoundry";
import { Textfield } from "./components/TextField";
import {Home } from './modules/Home'
import React from 'react';
function App() {

  
  
  return (
    <div >
      <ErrorBoundry>
      <Home ></Home>
      </ErrorBoundry>
      Hello world
    </div>
  );
}

export default App;
