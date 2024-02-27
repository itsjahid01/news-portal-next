"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/Grouplogo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Stack } from '@mui/material';

const pages = [{
  path:'/',
  pathName:"Home"
},{
  path:"/pages",
  pathName:"Pages"
},{
  path:"/category",
  pathName:"Category"
},{
  path:"/news",
  pathName:"News"
},{
  path:"/post",
  pathName:"Post"
},{
  path:"/contact",
  pathName:"Contact"
}
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar className='bg-black' position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box  sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page?.path} onClick={handleCloseNavMenu}>
                  <Link href={page.path} textAlign="center">{page.pathName}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Image src={logo} alt='logo'></Image>
          <Box  sx={{ flexGrow: 1, justifyContent:'center', display: { xs: 'none', md: 'flex',}}}>
            {pages.map((page) => (
              <Link className='mx-2' href={page.path}
                key={page?.path}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block'}}
              >
                {page?.pathName}
              </Link>
            ))}
          </Box>
          <Box>
              <Stack direction='row' spacing={1}>
              <FacebookIcon></FacebookIcon>
              <TwitterIcon></TwitterIcon>
              <YouTubeIcon></YouTubeIcon>
              <LinkedInIcon></LinkedInIcon>
              <InstagramIcon></InstagramIcon>
              </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;