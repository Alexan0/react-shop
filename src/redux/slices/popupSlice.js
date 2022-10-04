import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	popup: false,
}

export const popupSlice = createSlice({
	name: 'popup',
	initialState,
	reducers: {
		showPopup(state) {
			state.popup = true;
			document.body.style.overflow = "hidden"
		},
		hiddenPopup(state) {
			state.popup = false;
			document.body.style.overflow = "auto"
		}
	}
})

export const { showPopup, hiddenPopup } = popupSlice.actions;

export default popupSlice.reducer;