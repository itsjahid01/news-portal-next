import CategoryList from "@/components/ui/Category/CategoryList";

import { Box, Container, Grid } from "@mui/material";
import React from "react";

const CategoryLayout = ({ children }) => {
  return (
    <Container maxWidth="lg">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <CategoryList></CategoryList>
          </Grid>
          <Grid item xs={8}>
            {children}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CategoryLayout;
