import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	moreItems: 7,
}

export const showItemsSlice = createSlice({
	name: 'showItems',
	initialState,
	reducers: {
		showItems(state) {
			state.moreItems += 7;
		}
	}
})

export const { showItems } = showItemsSlice.actions;

export default showItemsSlice.reducer;