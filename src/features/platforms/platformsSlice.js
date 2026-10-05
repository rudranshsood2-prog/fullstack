import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: {
    instagram: {
      id: "instagram",
      name: "Instagram",
    },

    twitter: {
      id: "twitter",
      name: "Twitter",
    },

    facebook: {
      id: "facebook",
      name: "Facebook",
    },
  },

  ids: ["instagram", "twitter", "facebook"],
};

const platformsSlice = createSlice({
  name: "platforms",

  initialState,

  reducers: {
    addPlatform: (state, action) => {
      const platform = action.payload;

      state.entities[platform.id] = platform;
      state.ids.push(platform.id);
    },
  },
});

export const { addPlatform } = platformsSlice.actions;

export default platformsSlice.reducer;