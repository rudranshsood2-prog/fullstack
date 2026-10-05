import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectFilteredPosts } from "../features/posts/postsSelectors";
import { deletePost } from "../features/posts/postsSlice";

const PostList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectFilteredPosts);

  return (
    <div>
      <h2>Posts</h2>

      <p>
        Total Posts: <strong>{posts.length}</strong>
      </p>

      {posts.map((post) => (
        <div className="post" key={post.id}>
          <h3>{post.title}</h3>

          <p>{post.content}</p>

          <p>
            Platform: <strong>{post.platformId}</strong>
          </p>

          <button
            onClick={() => dispatch(deletePost(post.id))}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default React.memo(PostList);