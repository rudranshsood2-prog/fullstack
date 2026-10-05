import { useState } from "react";
import { useDispatch } from "react-redux";

import { addPost } from "../features/posts/postsSlice";

const AddPost = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      return;
    }

    const newPost = {
      id: Date.now().toString(),
      title: title,
      content: content,
      platformId: "instagram",
    };

    dispatch(addPost(newPost));

    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Post</h2>

      <input
        type="text"
        placeholder="Enter post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />

      <textarea
        placeholder="Enter post content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <br />

      <button type="submit">
        Add Post
      </button>
    </form>
  );
};

export default AddPost;