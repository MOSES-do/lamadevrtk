import { createSlice } from '@reduxjs/toolkit'
// import axios from "axios"

// const users_db = "http://localhost:3500/users";


// export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
//     try {
//         const response = await axios.get(users_db)
//         return [...response.data]
//     } catch (err) {
//         return err.message
//     }
// })
// const initialState = [

//     {
//         id: 1,
//         name: "moses",
//         email: "archer.me24@gmail.com"
//     }

// ]


const usersSlice = createSlice({
    name: "users",
    initialState: [
        {
            id: 1,
            name: "moses",
            email: "archer.me24@gmail.com"
        }
    ],
    reducers: {},

})


export const { update, remove } = usersSlice.actions;
export const selectAllUsers = (state) => state.users;
// export const getUsersStatus = (state) => state.users.status;
export default usersSlice.reducer;