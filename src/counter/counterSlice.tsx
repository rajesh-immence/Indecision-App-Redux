import React from "react"
import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import store from '../store/Store';
import { randomBytes } from "crypto";

// ======
type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch : ()=> AppDispatch = useDispatch;
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;
// =====

// interface InitialState  {
//     value: number
// };

// const initialState =   {
//     value: 0,
// } as InitialState;


interface InitialState  {
    choices: string []
    data : string
};

const initialState =   {
    choices: [],
    data: ""
} as InitialState;

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        addChoice : (state, action : PayloadAction<string>) =>{
            state.choices.push(action.payload);
            // state.choices = [];
        },

        randomChoice : (state) =>{ 
           state.data = state.choices[Math.floor(Math.random() * state.choices.length)]
        },
        clear : (state) => {
                state.choices = []
        }
    //    increment : (state) => {
    //     state.value +=1
    //    },
    //    decrement : (state) =>{
    //     state.value -=1
    //    },

    //    incrementByAmount: (state, action : PayloadAction<number>)=>{
    //     state.value += action.payload
    //    }

    }
}) 

export const {addChoice, randomChoice, clear} = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.choices
export const selectData = (state: RootState) => state.counter.data

export default counterSlice.reducer
