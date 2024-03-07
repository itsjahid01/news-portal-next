import { getAllNews } from "@/utils/getAllNews";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const LatestNews = async () => {
  const { data } = await getAllNews();
  const { id, category, title, author, details, thumbnail_url } = data[0];
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
        <Card sx={{ my: 3 }}>
          <CardActionArea>
            <CardMedia>
              <Image
                src={thumbnail_url}
                alt="image"
                width={800}
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
              <Typography variant="body2" color="text.secondary">
                {details.length > 200
                  ? details.slice(0, 200) + "....."
                  : details}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <hr className="my-4" />
      </Box>
    </>
  );
};

export default LatestNews;
