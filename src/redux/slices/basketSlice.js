import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	totalCount: 0,
	items: [],
}

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		addItem(state, action) {
			state.items.push(action.payload);
			state.totalCount = state.items.reduce((sum, obj) => {
				return obj.price + sum;
			}, 0).toFixed(2)
		},
		removeItem(state, action) {
			state.items = state.items.filter(obj => obj.id !== action.payload);
			state.totalCount = state.items.reduce((sum, obj) => {
				return obj.price + sum;
			}, 0).toFixed(2)
		},
		clearItems(state) {
			state.items = [];
			state.totalCount = 0;
		}
	},
})

export const { addItem, removeItem, clearItems } = basketSlice.actions;

export default basketSlice.reducer;