import { getCategoryNews } from "@/utils/getCategoryNews";
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
import Link from "next/link";
import React from "react";

const CategoryPage = async ({ searchParams }) => {
  const { category } = searchParams;

  const { data } = await getCategoryNews(category);
  //   console.log(data[0]);

  return (
    <Box>
      <Typography
        variant="h5"
        className="my-3 p-3 font-semibold w-[200px] border-0 border-b-2 border-b-[#FF0000]"
      >
        National News
      </Typography>
      <Grid container spacing={3}>
        {data.map((news) => (
          <Grid key={news?._id} item xs={6}>
            <Link
              href={`/details/${news?.category.toLowerCase()}/${news?._id}`}
            >
              <Card sx={{ my: 3, height: "520px" }}>
                <CardActionArea>
                  <CardMedia>
                    <Image
                      src={news?.image_url}
                      alt="image"
                      width={500}
                      height={300}
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
                      {news?.details.length > 150
                        ? news?.details.slice(0, 150) + "....."
                        : news?.details}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryPage;
