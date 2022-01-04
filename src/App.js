import "./App.css";
import Nav from "./Components/Nav";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ItemDetail from "./Pages/ItemDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />}>
            <Route index element={<h3>Select Item </h3>} />
            <Route path="/shop/:id" element={<ItemDetail />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
