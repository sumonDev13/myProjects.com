import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;
