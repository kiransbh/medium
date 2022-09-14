import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    follow: false
}

export const FollowSlice = createSlice({
    name: "follow",
    initialState,
    reducers: {
        following: (state) => {
            state.follow = true
        }
    }
})

export const { following } = FollowSlice.actions;

export default FollowSlice;