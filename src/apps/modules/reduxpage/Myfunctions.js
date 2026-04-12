import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  name:"kumar",
  salary:9000,
  year:2026
}

export const myslicer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.salary +=2000;
    },
    changename: (state)=>{
        state.name="rohit singh"
    }

  },
})

export const { increment,changename } = myslicer.actions

export default myslicer.reducer