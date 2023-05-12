import React from "react";
import { Main } from "./components/Main"; 
import { ResultBox } from "./components/ResultBox";
import Typography from '@mui/material/Typography'
// import Counter from "./counter/Counter";

function App() {
  return (
    <div className="App" >
      {/* <Counter /> */}
      <Typography margin={"1rem"} textAlign={"center"} variant="h3" color="initial">Indecision App</Typography>
      <Main/>
      <ResultBox/>
    </div>
  );
}

export default App;
