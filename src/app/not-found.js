import { Box, Container, Typography } from "@mui/material";
import React from "react";

const ErrorPage = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <Typography variant="h1">404</Typography>
          <Typography sx={{ color: "red" }} variant="h4">
            Page Not Found
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default ErrorPage;
