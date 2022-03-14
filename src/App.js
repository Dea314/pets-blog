import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import NotFound from "./components/NotFound";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="new-comment" element={<Contact/>} />
        <Route path="about" element={<About/>} />
        <Route path="*" element={NotFound} />
      </Route>
    </Routes>
  );
};

export default App;