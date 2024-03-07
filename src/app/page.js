import LatestNews from "@/components/ui/Home/LatestNews";
import { getAllNews } from "@/utils/getAllNews";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const HomePage = async () => {
  return (
    <Container maxWidth="lg">
      <Box>
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <Typography
              variant="h5"
              className="my-3 p-3 font-semibold w-[200px] border-0 border-b-2 border-b-[#FF0000]"
            >
              National News
            </Typography>
            <LatestNews></LatestNews>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="h5"
              className="my-4 p-3 font-semibold w-[200px] border-0 border-b-2 border-b-[#FF0000]"
            >
              Sidebar
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;
