import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	searchText: '',
}

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		searchBy(state, action) {
			state.searchText = action.payload;
		}
	}
})

export const { searchBy } = searchSlice.actions;

export default searchSlice.reducer;