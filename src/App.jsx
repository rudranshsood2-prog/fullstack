import AddPost from "./components/AddPost";
import PlatformFilter from "./components/PlatformFilter";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="container">

      <h1>Redux Post Management System</h1>

      <AddPost />

      <hr />

      <PlatformFilter />

      <hr />

      <PostList />

    </div>
  );
}

export default App;