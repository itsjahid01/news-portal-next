import { Box, CircularProgress, Container } from "@mui/material";
import React from "react";

const LoadingPage = () => {
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
          <CircularProgress color="secondary" />
        </Box>
      </Container>
    </>
  );
};

export default LoadingPage;
