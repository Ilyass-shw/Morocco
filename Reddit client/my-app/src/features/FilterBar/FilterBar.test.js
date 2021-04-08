import React from "react";
import { FilterBar } from "./FilterBar";
import { jest } from "@jest/globals";
import { filterUpdated } from "../posts/postsSlice";
import { render, makeTestStore, fireEvent, screen, cleanup } from "./testUtils";
jest.mock("@iconify/react", () => {
	return { InlineIcon: () => <p>InlineIcon mock</p> };
});

jest.mock("@iconify-icons/bx/bxs-rocket", () => {
	return {
		default: () => {
			return "rock";
		},
	};
});
jest.mock("@iconify-icons/ant-design/fire-filled", () => {
	return {
		default: () => {
			return "rock";
		},
	};
});
jest.mock("@iconify-icons/ic/sharp-new-releases", () => {
	return {
		default: () => {
			return "rock";
		},
	};
});
jest.mock("@iconify/icons-oi/vertical-align-top", () => {
	return {
		default: () => {
			return "rock";
		},
	};
});
jest.mock("@iconify/icons-icons8/comments", () => {
	return {
		default: () => {
			return "rock";
		},
	};
});
jest.mock("@iconify-icons/eva/arrow-ios-forward-outline", () => {
	return {
		default: () => {
			return "rock";
		},
	};
});
jest.mock("@iconify-icons/eva/arrow-ios-back-outline", () => {
	return {
		default: () => {
			return "rock";
		},
	};
});

let store;

describe("FilterBar", () => {
	beforeEach(() => {
		store = makeTestStore();
	});

	it("should match the snapshot", () => {
		cleanup()
		const { container } = render(<FilterBar />, { store });
		expect(container).toMatchSnapshot();
	});

	it("should render without crashing", () => {
		render(<FilterBar />, { store });
	});

	it("should render with 'Relevance' as the default selected filter", () => {
		render(<FilterBar />, { store });

		const relevanceFilterButton = screen.getByText("Relevance");

		expect(relevanceFilterButton.className).toBe("filter-button selected");
	});

	it("should be able to select any button as the selected filter and one at a time", () => {
		render(<FilterBar />, { store });

		const relevanceFilterButton = screen.getByText("Relevance");
		const hotFilterButton = screen.getByText("Hot");
		const newFilterButton = screen.getByText("New");
		const commentsFilterButton = screen.getByText("Comments");
		const topFilterButton = screen.getByText("Top");

		expect(hotFilterButton.className).toBe("filter-button false");
		expect(newFilterButton.className).toBe("filter-button false");
		expect(commentsFilterButton.className).toBe("filter-button false");
		expect(topFilterButton.className).toBe("filter-button false");
		expect(relevanceFilterButton.className).toBe("filter-button selected");

		fireEvent.click(hotFilterButton);

		expect(hotFilterButton.className).toBe("filter-button selected");
		expect(newFilterButton.className).toBe("filter-button false");
		expect(commentsFilterButton.className).toBe("filter-button false");
		expect(topFilterButton.className).toBe("filter-button false");
		expect(relevanceFilterButton.className).toBe("filter-button false");

		fireEvent.click(newFilterButton);

		expect(hotFilterButton.className).toBe("filter-button false");
		expect(newFilterButton.className).toBe("filter-button selected");
		expect(commentsFilterButton.className).toBe("filter-button false");
		expect(topFilterButton.className).toBe("filter-button false");
		expect(relevanceFilterButton.className).toBe("filter-button false");

		fireEvent.click(commentsFilterButton);

		expect(hotFilterButton.className).toBe("filter-button false");
		expect(newFilterButton.className).toBe("filter-button false");
		expect(commentsFilterButton.className).toBe("filter-button selected");
		expect(topFilterButton.className).toBe("filter-button false");
		expect(relevanceFilterButton.className).toBe("filter-button false");

		fireEvent.click(topFilterButton);

		expect(hotFilterButton.className).toBe("filter-button false");
		expect(newFilterButton.className).toBe("filter-button false");
		expect(commentsFilterButton.className).toBe("filter-button false");
		expect(topFilterButton.className).toBe("filter-button selected");
		expect(relevanceFilterButton.className).toBe("filter-button false");

		fireEvent.click(relevanceFilterButton);

		expect(hotFilterButton.className).toBe("filter-button false");
		expect(newFilterButton.className).toBe("filter-button false");
		expect(commentsFilterButton.className).toBe("filter-button false");
		expect(topFilterButton.className).toBe("filter-button false");
		expect(relevanceFilterButton.className).toBe("filter-button selected");
	});

	it("should render with the relative filter everytime a new filter button is clicked", () => {
		render(<FilterBar />, { store });

		const hotFilterButton = screen.getByText("Hot");
		fireEvent.click(hotFilterButton);

		expect(store.dispatch).toHaveBeenCalledWith(filterUpdated("hot"));

		const TopFilterButton = screen.getByText("Top");
		fireEvent.click(TopFilterButton);

		expect(store.dispatch).toHaveBeenCalledWith(filterUpdated("top"));

		const NewFilterButton = screen.getByText("New");
		fireEvent.click(NewFilterButton);

		expect(store.dispatch).toHaveBeenCalledWith(filterUpdated("new"));

		const RelevanceFilterButton = screen.getByText("Relevance");
		fireEvent.click(RelevanceFilterButton);

		expect(store.dispatch).toHaveBeenCalledWith(filterUpdated("relevance"));

		const CommentsFilterButton = screen.getByText("Comments");
		fireEvent.click(CommentsFilterButton);

		expect(store.dispatch).toHaveBeenCalledWith(filterUpdated("comments"));
	});
});
