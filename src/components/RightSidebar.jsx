import { Box, Typography } from '@mui/material'
import React from 'react'

const RightSidebar = () => {
  return (
    <Box sx={{
        bgcolor:'lightblue',
        flex:2,
        padding:2,
        display:{
            xs:'none',
            sm:'block'
        }
    }}>
        <Box position='fixed'>
            <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
        </Box>
    </Box>
  )
}

export default RightSidebar