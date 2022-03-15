import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="new-post" element={<div>Tell us about your pet!</div>} />
      </Route>
    </Routes>
  );
};

export default App;
