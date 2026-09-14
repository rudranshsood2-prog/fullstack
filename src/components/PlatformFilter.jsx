import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setFilter } from "../features/posts/postsSlice";

import {
  selectAllPlatforms,
} from "../features/posts/postsSelectors";

const PlatformFilter = () => {
  const dispatch = useDispatch();

  const platforms = useSelector(selectAllPlatforms);

  return (
    <div>
      <h2>Filter Posts</h2>

      <button
        onClick={() => dispatch(setFilter("all"))}
      >
        All
      </button>

      {platforms.map((platform) => (
        <button
          key={platform.id}
          onClick={() =>
            dispatch(setFilter(platform.id))
          }
        >
          {platform.name}
        </button>
      ))}
    </div>
  );
};

export default PlatformFilter;