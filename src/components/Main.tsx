import {FormProvider as Form, useForm } from "react-hook-form"; 
import { Button, List, ListItem,  Stack, TextField} from "@mui/material";
import React, { ChangeEvent, useState } from "react"
import ResultBox from "./ResultBox";
import { addChoice, clear,  selectChoice, useAppDispatch, useAppSelector } from "../counter/counterSlice";

export const Main = () => {
    const [choice, setChoice] = useState<string>("");
    const dispatch = useAppDispatch();
    const choices = useAppSelector(selectChoice)

    const  updateChoice = (e : ChangeEvent<HTMLInputElement>)=>{
        setChoice(e.target.value);
    };
    const methods = useForm();
    const{handleSubmit} =  methods;
    const onSubmit = () =>{
            dispatch(addChoice(choice));
            setChoice("")
        }
    return(
        <div className="main" style={{
            margin: "0 auto",
            width:"768px"
        }}>
            <Form {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Stack  alignItems={"center"} justifyContent={"center"}  direction={"row"}>
                <TextField
                title="choice"
                sx={{
                    borderRadius:"6px",
                    width:"80%",
                    color:"white"
                }}
                inputProps={{ sx: {bgcolor: '#fff', color:"#24527a"} }}
                color="primary"
                type="text"
                value={choice}
                onChange={updateChoice}
                  id="choice"
                  label="Enter Your Choices"
                  required
                />
                <Button 
                type="submit"
                sx={{
                    width:"20%",
                    marginLeft:"1rem",
                    bgcolor:"#24527ac7",
                    height:"3.4rem"
                    
                }} variant="contained" size="large">Add</Button> 
                </Stack>
            </form>
            </Form>
            <Stack> 
                <List sx={{
                            margin: "1rem auto",
                            width: "100%"
                        }}  component="nav" aria-label="mailbox folders">
                    {choices.map((choice) => {
                        return <>
                        <ListItem key={choice} sx={{
                            borderRadius:"6px",
                            padding:"15px",
                            margin:"10px 0",
                            bgcolor:"#5b83afc7",
                            listStyleType:"circle",
                            display: "list-item",
                            color:"white",
                            fontSize:"1.4rem"
                            }}>
                            {choice}
                            </ListItem>
                            </>
                        })}
                </List>
            </Stack>
            <Stack alignItems={"center"} justifyContent={"center"}  direction={"row"}>
                <ResultBox />
                <Button sx={{
                    width:"50%",
                    marginLeft:"1rem",
                    bgcolor:"#24527ac7"
                }} variant="contained" size="large"  onClick={()=>dispatch(clear())}>Clear</Button>
            </Stack>
        </div>
    )
    }

