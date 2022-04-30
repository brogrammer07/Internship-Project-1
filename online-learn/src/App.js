import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Community from "./components/Community";
import Course from "./components/Course";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/community" exact element={<Community />} />
      <Route path="/course" exact element={<Course />} />
    </Routes>
  );
}

export default App;
