import React from "react";
import { useState, useEffect } from "react";
import { Box, positions } from "@mui/system";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import axios from "axios";

const Fun = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050")
      .then(({ data }) => {
        setPets(data);
      })
      .catch((err) => console.log(err));
  }, []);

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
        {pets?.map((pet, index) => (
          <Card key={index} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              {/* <CardMedia
                component="img"
                width={"400px"}
                align={"center"}
                src={`http:${pet.fields.blogImage.fields.file.url}`}
                alt="pets"
              /> */}
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {pet.name}
                </Typography>
                <Typography key={index}></Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default Fun;
