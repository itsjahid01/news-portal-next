import { Box, Container, Typography } from "@mui/material";
import React from "react";

const ErrorPage = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <Typography variant="h2">404</Typography>
        </Box>
      </Container>
    </>
  );
};

export default ErrorPage;
