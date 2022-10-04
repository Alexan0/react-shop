import { configureStore } from '@reduxjs/toolkit';

import basket from './slices/basketSlice';
import popup from './slices/popupSlice';
import showItems from './slices/showItemsSlice';
import search from './slices/searchSlice';

export const store = configureStore({
	reducer: {
		basket,
		popup,
		showItems,
		search,
	},
})
