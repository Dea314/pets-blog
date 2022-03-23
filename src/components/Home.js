import { useState, useEffect } from "react";
import { createClient } from "contentful";
import { Box } from "@mui/system";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const Home = () => {
  const classes = useStyles();
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
        <Card key={post.sys.id} sx={{ maxWidth: 345 }}>
          <Link to={`/post/${post.sys.id}`} className={classes.link}>
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
                <Typography>
                  {documentToReactComponents(post.fields.content)}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      ))}
    </Box>
  );
};

export default Home;
