import { Button, Stack, TextField } from "@mui/material"
import React, { ChangeEvent, useState } from "react"
import { addChoice, clear, randomChoice, selectCount, selectData, useAppDispatch, useAppSelector } from "../counter/counterSlice";
export const Main = () => {
    const [choice, setChoice] = useState<string>("");
    const dispatch = useAppDispatch();
    const choices = useAppSelector(selectCount)
    const data= useAppSelector(selectData);


    const  updateChoice = (e : ChangeEvent<HTMLInputElement>)=>{
        setChoice(e.target.value);
    };

    

    return(
        <div>
            <Stack  alignItems={"center"} justifyContent={"center"}  direction={"row"}>
                <TextField
                
                sx={{
                    width:"40%",
                    margin:"1rem"
                }}
                type="text"
                value={choice}
                onChange={updateChoice}
                  id="input choices"
                  label="Input Your Choices"
                />
                <Button onClick={()=> dispatch(addChoice(choice))} sx={{
                    width:"10%",
                    margin:"1rem"
                }} variant="contained" size="large">Add</Button>
            </Stack>
            <Stack>
                <ul>
                {choices.map((choice) => {
          return <li key={choice}>{choice}</li>;
        })}

                </ul>
            </Stack>
            <Stack alignItems={"center"} justifyContent={"center"}  direction={"row"}>
                <Button sx={{
                    width:"25%",
                    margin:"1rem"
                }} variant="contained" size="large" color="warning" onClick={()=>dispatch(randomChoice())}>Random</Button>
                <Button sx={{
                    width:"25%",
                    margin:"1rem"
                }} variant="contained" size="large" color="success" onClick={()=>dispatch(clear())}>Clear</Button>
            </Stack>
            <h1>{data}</h1>

        </div>
    )
    }
