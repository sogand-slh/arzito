import "./App.css";
//React-Router-dom
import { Routes, Route } from "react-router-dom";

import CoinDetail from "./components/CoinDetail";
import Landing from "./components/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/coinDetail" element={<CoinDetail />} />
    </Routes>
  );
}

export default App;
