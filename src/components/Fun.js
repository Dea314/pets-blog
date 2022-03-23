import React from "react";
import { client } from "./Client";
import { useState, useEffect } from "react";
import { Box, positions } from "@mui/system";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Fun = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    client
      .getEntries({ content_type: "petsBlog" })
      .then((res) => {
        console.log(res);
        setPets(res.items);
        console.log(res.items);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);
  console.log("pets", pets);
  return (
    <div>
      <Typography variant="h3" align="center" marginTop="50px">
        Pets blog
      </Typography>

      <Box
        sx={{
          width: "80%",
          marginTop: "5rem",
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {/* <Typography gutterBottom variant="h5" component="div"> */}
        {pets?.map((pet, index) => (
          <Card key={index} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                width={"400px"}
                align={"center"}
                src={`http:${pet.fields.blogImage.fields.file.url}`}
                alt="pets"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {pet.fields.blogImage.fields.title}
                </Typography>
                <Typography>{pet.fields.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default Fun;
