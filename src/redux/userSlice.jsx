import { createSlice, } from '@reduxjs/toolkit'




const initialState = {
    users: [
        {
            id: 1,
            name: "Tobi Amusan",
            email: "amusan@gmail.com"
        }
    ],
}





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
    }
})


export const selectAllUsers = (state) => state.users.users

export default usersSlice.reducer;