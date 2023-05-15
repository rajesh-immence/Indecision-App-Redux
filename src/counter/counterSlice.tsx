import React from "react"
import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import store from '../store/Store';

// ======
type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch : ()=> AppDispatch = useDispatch;
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;
// =====

interface InitialState  {
    choices: string []
    data : string;
} 

const initialState =   {
    choices: [],
    data: "",
} as InitialState;

export const appSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        addChoice : (state, action : PayloadAction<string>) =>{
            const lowercaseChoice = state.choices.map((ele)=> ele.toLowerCase());

            if(lowercaseChoice.includes(action.payload.toLowerCase()) === false){
                state.choices.push(action.payload);
            }else{
                alert("The enter value is already present in the choice list!")
            }
        },
        randomChoice : (state) =>{ 
                state.data = state.choices[Math.floor(Math.random() * state.choices.length)]
        },
        clear : (state) => {
                state.choices = []
        }
    }
}) 

export const {addChoice, randomChoice, clear} = appSlice.actions;
export const selectChoice = (state: RootState) => state.counter.choices;
export const selectData = (state: RootState) => state.counter.data;
export default appSlice.reducer
