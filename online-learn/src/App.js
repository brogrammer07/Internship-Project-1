import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Community from "./components/Community";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/community" exact element={<Community />} />
    </Routes>
  );
}

export default App;
