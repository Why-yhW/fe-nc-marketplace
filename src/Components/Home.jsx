import { Link } from "react-router";

function Home() {
  return (
    <div className="home">
      <p> description goes here</p>
      <nav>
        <Link to="/login" className="nav-link">
          <button className="login-button">Login</button>
        </Link>
        <Link to="/register" className="nav-link">
          <button className="register-button">Sign Up</button>
        </Link>
        <Link to="/items" className="nav-link">
          <button className="items-button">Items</button>
        </Link>
      </nav>
    </div>
  );
}

export default Home;
