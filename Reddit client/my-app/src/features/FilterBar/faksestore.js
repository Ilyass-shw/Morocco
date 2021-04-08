import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	firstFilter:'relevance',
	lastFilter:'comments',
	filter:'relevance',
};
const fakeSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {},
});

export default configureStore({
	reducer: {
		posts: fakeSlice.reducer,
	},
});
