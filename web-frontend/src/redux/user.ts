import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface userSliceState {
    email: string;
    isLogged: boolean;
}
const initialState: userSliceState = {
    email: "",
    isLogged: false,
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        removeEmail: state => {
            state.email = ""
        },
        isUserLogged: (state, action: PayloadAction<boolean>) => {
            state.isLogged = action.payload;
        },
    }
})

// Action creators are generated for each case reducer function
export const { addEmail, removeEmail, isUserLogged } = userSlice.actions

export default userSlice.reducer