import { createSlice } from '@reduxjs/toolkit'

const languageSlice = createSlice({
    name: 'language',
    initialState: {len: "en"},
    reducers: {
        changeLanguage: (state, action) => {
            state.len = action.payload
        }
    }
});

export const { changeLanguage } = languageSlice.actions

export default languageSlice.reducer