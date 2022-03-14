import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>All articles</div>} />
        <Route path="new-comment" element={<div>Tell us about your pet!</div>} />
      </Route>
    </Routes>
  );
};

export default App;