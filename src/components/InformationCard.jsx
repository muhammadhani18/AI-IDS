import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import DeviceHubOutlinedIcon from '@mui/icons-material/DeviceHubOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';


function InformationCard() {
  return (
    <>
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 3,
          width: 320,
          height: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20px',
          
          color: '#fff',
        },
      }}
    >
      <Paper variant="outlined" sx={{backgroundColor: '#1bc900'}}>
        <StorageRoundedIcon sx={{ fontSize: 40 }} />
        <Typography variant="h5" component="div" >
          Capacity = 50MB
        </Typography>
      </Paper>
      <Paper variant="outlined" sx={{backgroundColor: '#1976d2'}}>
        <DeviceHubOutlinedIcon sx={{ fontSize: 40 }} />
        <Typography variant="h5" component="div">
          IP Hit = 30
        </Typography>
      </Paper>
      <Paper variant="outlined" sx={{backgroundColor: '#FF0000'}}>
        <ErrorOutlineOutlinedIcon sx={{ fontSize: 40 }} />
        <Typography variant="h5" component="div">
          Errors = 12
        </Typography>
      </Paper>
    </Box>
    <hr/>
      </>
  );
}

export default InformationCard;
