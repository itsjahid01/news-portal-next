import { getAllNews } from "@/utils/getAllNews";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const LatestNews = async () => {
  const { data } = await getAllNews();
  const { id, category, title, author, details, thumbnail_url } = data[0];
  // console.log(news);
  return (
    <>
      <Box sx={{ my: 5 }}>
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
              <span className="p-1 rounded-md text-white bg-[#FF0000]">
                {category}
              </span>
              <Typography variant="h5" sx={{ my: 2, fontWeight: "bold" }}>
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
        <Grid container spacing={2}>
          {data.slice(0, 8).map((news) => (
            <Grid key={news._id} item xs={6}>
              <Card sx={{ height: "500px" }}>
                <CardActionArea>
                  <CardMedia>
                    <Image
                      src={news?.thumbnail_url}
                      alt="image"
                      width={400}
                      height={200}
                    ></Image>
                  </CardMedia>
                  <CardContent>
                    <span className="p-1 rounded-md text-white bg-[#FF0000]">
                      {news?.category}
                    </span>
                    <Typography variant="h5" sx={{ my: 2, fontWeight: "bold" }}>
                      {news?.title}
                    </Typography>
                    <Typography sx={{ my: 2 }}>
                      By {news?.author?.name} - {news?.author?.published_date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {news?.details.length > 100
                        ? news?.details.slice(0, 100) + "....."
                        : news?.details}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default LatestNews;
