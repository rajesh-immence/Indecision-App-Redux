import  React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom:"2rem", bgcolor:"secondary.main" }} >
      <AppBar position="static" >
          <Typography  margin={"0.5rem auto"}  variant="h4" color="inherit" component="div">
            Indecision App
          </Typography>
      </AppBar>
    </Box>
  );
}