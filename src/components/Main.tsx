import * as Yup from "yup";
import {FormProvider as Form, useForm } from "react-hook-form"; 
// import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Divider, List, ListItem, ListItemText, Stack, TextField, Typography } from "@mui/material";
import { LoadingButton } from '@mui/lab';
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
    const {register,  handleSubmit} = methods;

    const onSubmit = () =>{
            dispatch(addChoice(choice));
            setChoice("")
        }
    return(
        <div>
            <Form {...methods} >
            <form onSubmit={handleSubmit(onSubmit)}>
            <Stack  alignItems={"center"} justifyContent={"center"}  direction={"row"}>
                <TextField
                title="choice"
                sx={{
                    width:"40%",
                    margin:"1rem"
                }}
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
                    width:"10%",
                    margin:"1rem"
                }} variant="contained" size="large">Add</Button>
            </Stack>
            </form>
            </Form>
            <Stack> 
                <List sx={{
                            margin: "2rem auto",
                            width: "52%"
                        }}  component="nav" aria-label="mailbox folders">
                    {choices.map((choice) => {
                        return <>
                        <ListItem key={choice} sx={{
                            listStyleType:"disc",
                            display: "list-item",
                            }}>
                            {choice}
                            </ListItem>
                            <Divider />
                            </>
                        })}
                </List>
            </Stack>
            <Stack alignItems={"center"} justifyContent={"center"}  direction={"row"}>
                <ResultBox />
                <Button sx={{
                    width:"25%",
                    margin:"1rem"
                }} variant="contained" size="large" color="success" onClick={()=>dispatch(clear())}>Clear</Button>
            </Stack>
        </div>
    )
    }

