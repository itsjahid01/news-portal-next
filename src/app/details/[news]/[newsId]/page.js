import { getSingleNews } from "@/utils/getSingleNews";
import { Avatar, Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const DetailsPage = async ({ params }) => {
  const { data } = await getSingleNews(params?.newsId);
  const { title, author, thumbnail_url, image_url, details } = data;
  console.log(data);
  return (
    <Container maxWidth="lg">
      <Box className="my-6 p-4">
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <Image
              src={thumbnail_url}
              width={500}
              height={500}
              alt="image"
              className="rounded-md"
            ></Image>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={6}>
                <Image
                  src={image_url}
                  width={500}
                  height={500}
                  alt="image"
                  className="rounded-md"
                ></Image>
              </Grid>
              <Grid item xs={6}>
                <Image
                  src={image_url}
                  width={500}
                  height={500}
                  alt="image"
                  className="rounded-md"
                ></Image>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="h4" className="font-bold">
              {title}
            </Typography>
            <Stack
              spacing={2}
              direction="row"
              alignItems="center"
              className="my-7"
            >
              <Avatar alt={author?.name} src={author?.img} />
              <Typography variant="" className="">
                By {author?.name} - {author?.published_date}
              </Typography>
            </Stack>
            <Typography variant="" className="">
              {details}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default DetailsPage;
