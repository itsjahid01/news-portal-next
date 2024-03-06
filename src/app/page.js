import LatestNews from "@/components/ui/Home/LatestNews";
import { Box, Grid, Item } from "@mui/material";

const HomePage = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
      <LatestNews></LatestNews>
    </Box>
  );
};

export default HomePage;
