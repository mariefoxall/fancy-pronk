import "./Home.css";
import { Link } from "react-router";
function Home() {
  return (
    <div className="home-page">
      <Link to="/shop">
        <h1>
          FANCY
          <br />
          PRONK
          <br />
          SILENT
          <br />
          AUCTION
        </h1>
        <h3 className="click-to-enter">(click to enter)</h3>
      </Link>
    </div>
  );
}

export default Home;
