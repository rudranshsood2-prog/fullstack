import { createSelector } from "@reduxjs/toolkit";

// Get the complete posts state
const selectPostState = (state) => state.posts;

// Get the complete platforms state
const selectPlatformState = (state) => state.platforms;


// Get all posts as an array
export const selectAllPosts = createSelector(
  [selectPostState],
  (posts) => posts.ids.map((id) => posts.entities[id])
);


// Get all platforms as an array
export const selectAllPlatforms = createSelector(
  [selectPlatformState],
  (platforms) =>
    platforms.ids.map((id) => platforms.entities[id])
);


// Get filtered posts
export const selectFilteredPosts = createSelector(
  [selectAllPosts, selectPostState],

  (posts, postState) => {
    // If "all" is selected, return every post
    if (postState.filter === "all") {
      return posts;
    }

    // Otherwise filter posts by platform
    return posts.filter(
      (post) => post.platformId === postState.filter
    );
  }
);


// Get number of currently displayed posts
export const selectPostCount = createSelector(
  [selectFilteredPosts],
  (posts) => posts.length
);