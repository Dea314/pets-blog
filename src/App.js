import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import NotFound from "./components/NotFound";
import { createClient } from "contentful";
import { useState, useEffect } from "react";
import Fun from "./components/Fun";
import NewComment from "./components/NewComment";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    const client = createClient({
      space: process.env.REACT_APP_SPACE_ID,
      accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    });
    client
      .getEntries()
      .then((entries) => {
        console.log(entries);
        setPosts(entries.items);
        console.log(entries.items);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
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
