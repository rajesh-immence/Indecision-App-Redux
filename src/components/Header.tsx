import  React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom:"2rem", bgcolor:"red !important" }} >
      <AppBar position="static" sx={{
            bgcolor:"#24527a"
          }}>
          <Typography color={"#d5def5"}  margin={"0.5rem auto"}  variant="h4"  component="div">
            Indecision App
          </Typography>
          <Typography color={"#d5def5"}  margin={"-0.5rem auto 0.5rem auto"}  variant="caption"  component="div">
            Solution for Your Confusion
          </Typography>
      </AppBar>
    </Box>
  );
}

