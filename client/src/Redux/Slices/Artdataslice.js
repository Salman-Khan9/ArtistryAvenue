import { createSlice } from '@reduxjs/toolkit'

const initialState = {
Artdata : []
}

const Artdataslice = createSlice({
  name: "Art",
  initialState,
  reducers: {
    set_artdata(state,action){
        state.Artdata = action.payload
    }
  }
});

export const {set_artdata} = Artdataslice.actions
export const selectartdata = (state) => state.Art.Artdata 
export default Artdataslice.reducer