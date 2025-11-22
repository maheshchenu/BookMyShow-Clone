import { createSlice } from "@reduxjs/toolkit";

const seatSlice = createSlice({
  name: "seats",
  initialState: {
    selectedSeats: [],
  },
  reducers: {
    setSeats: (state, action) => {
      state.selectedSeats = action.payload;
    },
    clearSeats: (state) => {
      state.selectedSeats = [];
    }
  },
});

export const { setSeats, clearSeats } = seatSlice.actions;
export default seatSlice.reducer;
