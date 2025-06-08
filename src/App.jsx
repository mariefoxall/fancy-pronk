import yyyLogo from "./assets/transparent-logo-colour-web.gif";
import "./App.css";
import Shop from "./Shop/Shop";
import Home from "./HOME/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import { itemA } from "./firebase";

function App() {
  console.warn(itemA);
  return (
    <Router>
      <header>
        <button className="home-button">
          <Link to="/">
            <img src={yyyLogo} className="logo" alt="YYY logo" />
          </Link>
        </button>
      </header>
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
