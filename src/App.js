import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Article from "./components/";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>All Posts</div>} />
        <Route path= '/' element={<Article/>} />
      </Route>
    </Routes>
  );
};

export default App;
