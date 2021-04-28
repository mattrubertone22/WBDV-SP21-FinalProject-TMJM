import {BrowserRouter} from "react-router-dom";
import React from "react";
import BaseApp from "./prototype/base-app";


function App() {
  return (
       <BrowserRouter>
             <BaseApp/>
           </BrowserRouter>
  );
}

export default App;
