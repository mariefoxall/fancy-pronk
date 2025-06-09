import yyyLogo from "./assets/transparent-logo-colour-web.gif";
import "./App.css";
import Shop from "./Shop/Shop";
import Home from "./HOME/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import { itemA } from "./firebase";
import ItemPage from "./ItemPage/ItemPage";

function App() {
  return (
    <Router>
      <header>
        <button className="home-button">
          <Link to="/shop">
            <img src={yyyLogo} className="logo" alt="YYY logo" />
          </Link>
        </button>
      </header>
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/" element={<Home />} />
        <Route path="item" element={<ItemPage />} />
      </Routes>
    </Router>
  );
}

export default App;
