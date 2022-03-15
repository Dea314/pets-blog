import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
<<<<<<< HEAD
=======
import Contact from "./components/Contact";
import About from "./components/About";
import NotFound from "./components/NotFound";

>>>>>>> bfdeb1807197bb230c252b392004ec253ea4c006

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
<<<<<<< HEAD
        <Route index element={<Home />} />
        <Route path="new-post" element={<div>Tell us about your pet!</div>} />
=======
        <Route index element={<Home/>} />
        <Route path="new-comment" element={<Contact/>} />
        <Route path="about" element={<About/>} />
        <Route path="*" element={NotFound} />
>>>>>>> bfdeb1807197bb230c252b392004ec253ea4c006
      </Route>
    </Routes>
  );
};

export default App;