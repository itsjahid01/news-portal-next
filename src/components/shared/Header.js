import React from "react";
import logo from "@/assets/The Dragon News.png";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import { getDateInfo } from "@/utils/getDateInfo";

const Header = () => {
  const { date, day, month, year } = getDateInfo();
  //   console.log(date);
  return (
    <>
      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Container maxWidth="lg">
          <Image
            className="mb-4 mx-auto"
            src={logo}
            alt="logo"
            width={468}
          ></Image>
          <Typography className="text-[#706F6F] mb-3">
            Journalism Without Fear or Favour
          </Typography>
          <Typography className="">
            {day}, {month} {date}, {year}
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Header;
