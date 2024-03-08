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
              <Typography variant="h6" sx={{ my: 1, fontWeight: "bold" }}>
                {title}
              </Typography>
              <Typography sx={{ my: 1 }}>
                By {author?.name} - {author?.published_date}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <hr className="my-4" />
        <Grid container spacing={2}>
          {data.slice(0, 8).map((news) => (
            <Grid key={news?._id} item xs={12}>
              <Stack direction="row" spacing={2}>
                <Image
                  className="rounded-md"
                  src={news?.image_url}
                  alt="image"
                  width={90}
                  height={90}
                ></Image>
                <Box>
                  <Typography sx={{ fontWeight: "bold", mb: 1 }}>
                    {news?.title}
                  </Typography>
                  <Typography>{news?.author?.published_date}</Typography>
                </Box>
              </Stack>
              <hr className="my-4" />
            </Grid>
          ))}
        </Grid>
        <Image src={image} alt="image" width={400}></Image>
      </Box>
    </>
  );
};

export default Sidebar;
