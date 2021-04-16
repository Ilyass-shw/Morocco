import {  fetchPosts } from "../postsSlice";
import store from "../../../../app/store.js";
import { wait } from "@testing-library/react";

describe("lastFilterUpdated reducer", () => {
	it("should change postFetchingStatus from loading to succeeded if the fetching suceedes", async () => {
		let postFetchingStatus = store.getState().posts.postFetchingStatus;
		let postList = store.getState().posts.postList;

		expect(postFetchingStatus).toBe("idle");
		expect(postList).toHaveLength(0);

		store.dispatch(fetchPosts());

		await wait(() => expect(store.getState().posts.postFetchingStatus).toBe("succeeded"));

		postList = store.getState().posts.postList;

		expect(postList).toHaveLength(3);
		expect(postList).toMatchSnapshot();
	});
});
