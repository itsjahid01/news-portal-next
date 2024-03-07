import { getAllNews } from "@/utils/getAllNews";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import image from "@/assets/Rectangle 13.png";

const Sidebar = async () => {
  const { data } = await getAllNews();
  const { id, category, title, author, image_url } = data[0];
  return (
    <>
      <Box sx={{ my: 5 }}>
        <Card sx={{ my: 3 }}>
          <CardActionArea>
            <CardMedia>
              <Image
                src={image_url}
                alt="image"
                width={500}
                height={400}
              ></Image>
            </CardMedia>
            <CardContent>
              <span className="p-2 rounded-md text-white bg-[#FF0000]">
                {category}
              </span>
              <Typography variant="h5" sx={{ my: 2 }}>
                {title}
              </Typography>
              <Typography sx={{ my: 2 }}>
                By {author?.name} - {author?.published_date}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <hr className="my-4" />
        <Grid container spacing={2}>
          {data.map((news) => (
            <Grid key={news?._id} item xs={12}>
              <Stack direction="row" spacing={3}>
                <Image
                  src={news?.image_url}
                  alt=""
                  width={100}
                  height={100}
                ></Image>
                <Box>
                  <Typography variant="">{news?.title}</Typography>
                  <Typography>{news?.author?.published_date}</Typography>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Image src={image} alt="image" width={400}></Image>
      </Box>
    </>
  );
};

export default Sidebar;
