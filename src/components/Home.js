import { useState, useEffect } from "react";
import { createClient } from "contentful";
import { Box, width } from "@mui/system";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const client = createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  });

  useEffect(() => {
    client
      .getEntries({ content_type: "home" })
      .then((entries) => {
        setPosts(entries.items);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(posts);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {posts?.map((post) => (
        <Card key={post.id} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={post.fields.img.fields.file.url}
              alt={post.fields.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                {post.fields.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default Home;
