import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "@fontsource-variable/league-spartan/index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
