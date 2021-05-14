import "./Home.css";

import AppNavbar from "../smallerComponents/AppNavbar";
import PostList from "../PostList";

const Home = () => {
  return (
    <div className="Home container-1">
      <AppNavbar />
      <main className="container-2">
        <PostList />
      </main>
    </div>
  )
}

export default Home;