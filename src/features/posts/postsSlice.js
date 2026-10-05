import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: {
    1: {
      id: "1",
      title: "Learning Redux Toolkit",
      content: "Redux Toolkit makes state management easier.",
      platformId: "instagram",
    },

    2: {
      id: "2",
      title: "React Performance",
      content: "Memoized selectors improve application performance.",
      platformId: "twitter",
    },

    3: {
      id: "3",
      title: "Frontend Development",
      content: "React and Redux are useful for scalable applications.",
      platformId: "instagram",
    },
  },

  ids: ["1", "2", "3"],

  filter: "all",
};

const postsSlice = createSlice({
  name: "posts",

  initialState,

  reducers: {
    addPost: (state, action) => {
      const post = action.payload;

      state.entities[post.id] = post;
      state.ids.push(post.id);
    },

    deletePost: (state, action) => {
      const id = action.payload;

      delete state.entities[id];

      state.ids = state.ids.filter(
        (postId) => postId !== id
      );
    },

    updatePost: (state, action) => {
      const post = action.payload;

      if (state.entities[post.id]) {
        state.entities[post.id] = post;
      }
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const {
  addPost,
  deletePost,
  updatePost,
  setFilter,
} = postsSlice.actions;

export default postsSlice.reducer;