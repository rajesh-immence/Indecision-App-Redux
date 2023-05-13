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
    data: ""
} as InitialState;

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        addChoice : (state, action : PayloadAction<string>) =>{
            // // for(let i=0; i<state.choices.length; i++){
            // //     if(state.choices.length > 0 && action.payload.toLowerCase() === state.choices[i].toLowerCase()){
            // //          alert("Already present");
            // //         //  state.choices.pop()
            // //          state.choices.splice(i, 1);
            // //     }
            // }
            const lowercaseChoice = state.choices.map((ele)=> ele.toLowerCase());

            if(lowercaseChoice.includes(action.payload.toLowerCase()) === false){
                state.choices.push(action.payload);
            }else{
                alert("already present")
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

export const {addChoice, randomChoice, clear} = counterSlice.actions;
export const selectChoice = (state: RootState) => state.counter.choices
export const selectData = (state: RootState) => state.counter.data
export default counterSlice.reducer
