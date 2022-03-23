import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Fun from "./components/Fun";
import NewComment from "./components/NewComment";
import SinglePost from "./components/SinglePost";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="post/:id" element={<SinglePost />} />
        <Route path="fun" element={<Fun />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="comment" element={<NewComment />} />
      </Route>
    </Routes>
  );
};

export default App;
