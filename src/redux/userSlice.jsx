import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

const USERS_URL = "https://jsonplaceholder.typicode.com/users";


export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await axios.get(USERS_URL)
        return [...response.data]
    } catch (err) {
        return err.message
    }
})

export const deleteUser = createAsyncThunk('users/deleteUser', async (initUsers) => {
    const { id } = initUsers;

    try {
        const response = await axios.delete(`${USERS_URL}/${id}`)
        if (response?.status === 200) return initUsers;
        return `${response?.status}: ${response?.statusText}`
    } catch (err) {
        return err.message;
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
    reducers: {},

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
            .addCase(deleteUser.fulfilled, (state, action) => {
                if (!action.payload?.id) {
                    console.log('Delete could not complete')
                    console.log(action.payload);
                    return
                }
                const { id } = action.payload;
                const users = state.users.filter(user => user.id !== id);
                state.users = users;
            })
    }

})


export const selectAllUsers = (state) => state.users.users
export const getUsersStatus = (state) => state.users.status;
export const getUsersError = (state) => state.users.error;
export default usersSlice.reducer;