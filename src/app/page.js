import LatestNews from "@/components/ui/Home/LatestNews";
import { Box, Container, Grid, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Box>
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <LatestNews></LatestNews>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="h5"
              className="my-4 p-3 font-semibold w-[200px] border-0 border-b-4 border-b-[#FF0000]"
            >
              Latest News
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;
