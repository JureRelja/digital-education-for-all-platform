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
        coursesOrder: [{id: 1, completed: false}, {id: 2, completed: false}, {id: 3, completed: false}, {id: 4, completed: false}, {id: 5, completed: false}, {id: 6, completed: false}, {id: 7, completed: false}, {id: 8, completed: false}, {id: 9, completed: false}, {id: 10, completed: false}]
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
        },
        changeCourseStatus: (state, action) => {
            const courseIndex = action.payload.courseIndex
            state.coursesOrder[courseIndex].completed = action.payload.completed;
        }
    }
})

export const { changeRIASEC, changeUserCode, changeUserData, changeInitialTestCompleted, changeCoursesOrder, changeCourseStatus } = userSlice.actions

export default userSlice.reducer