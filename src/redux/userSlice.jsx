import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

const USERS_URL = "http://localhost:3500/users";


export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await axios.get(USERS_URL)
        return [...response.data]
    } catch (err) {
        return err.message
    }
})

const initialState = {
    users: [],
    status: "idle",
    error: null
}



// const initialState = []


const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        update(state, action) {
            return {
                ...state, users: action.payload.map((user, name) => (
                    user.name.toLowerCase().includes(name) ? console.log(name, user.name) : null
                ))
            }
        }
    },

    extraReducers(builder) {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.status = 'loading';
        })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }

})


export const { update, remove } = usersSlice.actions;
export const selectAllUsers = (state) => state.users.users
export const getUsersStatus = (state) => state.users.status;
export const getUsersError = (state) => state.users.error;
export default usersSlice.reducer;