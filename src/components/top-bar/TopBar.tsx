import type { ReactElement } from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export const TopBar = ():ReactElement => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{zIndex:(theme) => theme.zIndex.drawer + 1}}>
        <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div" fontSize='bold'>
                ONLINE SHOPPING CART
            </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default TopBar