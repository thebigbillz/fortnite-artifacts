import "./App.css";
import Nav from "./Components/Nav";
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
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/shop" element={<Shop />}>
            <Route
              index
              element={
                <h3
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: "2rem",
                    fontWeight: "500",
                    flex: "3 1 30rem",
                  }}
                >
                  Select Item{" "}
                </h3>
              }
            />
            <Route path=":id" element={<ItemDetail />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
