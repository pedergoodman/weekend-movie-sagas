import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';






export default function ButtonAppBar() {
  const history = useHistory();

  const handleClickHome = (event) => {
    history.push('/')
  }

  return (
    <Box sx={{ flexGrow: 1,  }}>
      <AppBar position="static" sx={{backgroundColor: '#E50914'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
            The Movie Saga!
          </Typography>
          <Button color="inherit" onClick={handleClickHome}>Home</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}