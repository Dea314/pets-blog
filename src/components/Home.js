import { useState, useEffect } from "react";
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
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const Home = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050")
      .then(({ data }) => {
        setPosts(data);
      })
      .catch((err) => console.log(err));
  }, []);

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
          <Link to={`/post/${post.id}`} className={classes.link}>
            <CardActionArea>
              {/* <CardMedia
                component="img"
                height="200"
                image={post.fields.img.fields.file.url}
                alt={post.name}
              /> */}
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {post.name}
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
