import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice ({
    name: 'counter',
    initialState : {
        count : 0
    },
    reducers:{ 
        setCountValue: (state, action) => {
            state.count=action.payload;
        },
    },
});

export const {setCountValue} = counterSlice.actions;