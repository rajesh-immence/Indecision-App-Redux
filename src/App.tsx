import React from "react";
import { Main } from "./components/Main"; 
import  ResultBox  from "./components/ResultBox";
import Typography from '@mui/material/Typography';
import Header from "./components/Header";


function App() {
  return (
    <div className="App" >
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
