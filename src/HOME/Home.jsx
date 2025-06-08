import "./Home.css";
import { Link } from "react-router";
function Home() {
  return (
    <div className="home-page">
      <Link to="/shop">
        <h1>
          FANCY PRONK <br></br>SILENT AUCTION
        </h1>
      </Link>
    </div>
  );
}

export default Home;
