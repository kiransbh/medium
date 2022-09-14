import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0
}

export const LikeSlice = createSlice({
    name: "like",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        }
    }
})

export const { increment } = LikeSlice.actions;

export default LikeSlice.reducer;