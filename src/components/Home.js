import { useState, useEffect } from "react";
import { createClient } from "contentful";

const Home = () => {
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

  return <div>{posts.map((post) => {})}</div>;
};

export default Home;
