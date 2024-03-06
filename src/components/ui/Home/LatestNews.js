import { getAllNews } from "@/utils/getAllNews";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const LatestNews = async () => {
  const { data } = await getAllNews();
  console.log(data);
  return (
    <>
      <Box>
        <Typography
          variant="h5"
          className="my-4 p-3 font-semibold w-[200px] border-0 border-b-4 border-b-[#FF0000]"
        >
          National News
        </Typography>
        <Card sx={{ my: 4 }}>
          <CardActionArea>
            <CardMedia>
              <Image
                src={data[0].thumbnail_url}
                alt="image"
                width={800}
                height={400}
              ></Image>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </>
  );
};

export default LatestNews;
