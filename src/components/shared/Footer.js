import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const pages = [
  {
    path: "/",
    pathName: "Home",
  },
  {
    path: "/pages",
    pathName: "Pages",
  },
  {
    path: "/category",
    pathName: "Category",
  },
  {
    path: "/news",
    pathName: "News",
  },
  {
    path: "/post",
    pathName: "Post",
  },
  {
    path: "/contact",
    pathName: "Contact",
  },
];

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  //   console.log(year);

  return (
    <Box className="bg-[#011321] text-center p-12">
      <Container>
        <Box sx={{ color: "white", mb: 3 }}>
          <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
            <FacebookIcon></FacebookIcon>
            <TwitterIcon></TwitterIcon>
            <YouTubeIcon></YouTubeIcon>
            <LinkedInIcon></LinkedInIcon>
            <InstagramIcon></InstagramIcon>
          </Stack>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            color: "white",
            justifyContent: "center",
            display: { xs: "none", md: "flex" },
            mb: 3,
          }}
        >
          {pages.map((page) => (
            <Link
              className="mx-2"
              href={page.path}
              key={page?.path}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {page?.pathName}
            </Link>
          ))}
        </Box>
        <Typography sx={{ color: "white" }}>
          @ {year} Dragon News. Design by Programming Hero
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
