import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        RIASEC: {
            firstLetter: { value: "0", letter: "" },
            secondLetter: { value: "0", letter: "" },
            thirdLetter:  { value: "0", letter: "" },
            fourthLetter: { value: "0", letter: "" },
            fifthLetter:  { value: "0", letter: "" },
            sixthLetter:  { value: "0", letter: "" },
            code: "R",
            completed: false,
          },
        userCode: "",
        userData: {
            firstName: "",
            lastName: "",
            dateOfBirth: {year: 0, month: 0, day: 0},
        },
        initialTestCompleted: false,
        coursesOrder: []
    },
    reducers: {
        changeRIASEC: (state, action) => {
            if (action.payload.completed) {
                state.RIASEC = action.payload
            }
        },
        changeUserCode: (state, action) => {
            state.userCode = action.payload
        },
        changeUserData: (state, action) => {
            state.userData = action.payload
        },
        changeInitialTestCompleted: (state, action) => {
            state.initialTestCompleted = action.payload
        },
        changeCoursesOrder: (state, action) => {
            state.coursesOrder = action.payload
        }
    }
})

export const { changeRIASEC, changeUserCode, changeUserData, changeInitialTestCompleted, changeCoursesOrder } = userSlice.actions

export default userSlice.reducer