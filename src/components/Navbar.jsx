
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import SpaIcon from '@mui/icons-material/Spa';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react';

const Navbar = () => {
    
    const [open,setOpen] = useState(false)

    const StyledToolBar = styled(Toolbar)({
        display:'flex',
        justifyContent:'space-between'
    })

    const Search = styled('div')(({theme})=>({
        backgroundColor:'white',
        padding:'0 10px',
        borderRadius:theme.shape.borderRadius,
        width:'40%'
    }))
    const Icons = styled(Box)(({theme})=>({
        display:'none',
        gap:'20px',
        alignItems:'center',
        [theme.breakpoints.up('sm')]:{
            display:'flex'
        }
    }))

    const BoxItem = styled(Box)(({theme})=>({
        display:'flex',
        alignItems:'center',
        gap:'10px',
        [theme.breakpoints.up('sm')]:{
            display:'none'
        }
    }))

  return (
    <>
        <AppBar position='sticky'>
            <StyledToolBar>
                <Typography variant='h6' sx={{
                    display:{
                        xs:'none',
                        sm:'block'
                    }
                }}>
                    Abhi's World
                </Typography>

                <SpaIcon sx={{
                    display:{
                        xs:'block',
                        sm:'none'
                    }
                }}></SpaIcon>

                <Search><InputBase placeholder='Search...'></InputBase></Search>

                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <NotificationsIcon />
                    </Badge>
                    <Avatar alt="My Photo" src="https://i.imgur.com/Y6p0RLO.jpg" onClick={()=>setOpen(true)} />
                </Icons>
                <BoxItem>
                    <Avatar alt="My Photo" src="https://i.imgur.com/Y6p0RLO.jpg" onClick={()=>setOpen(true)} />
                    <Typography>Abhi</Typography>
                </BoxItem>

            </StyledToolBar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                // anchorEl={anchorEl}
                open={open}
                onClose={()=>setOpen(false)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    </>
  )
}

export default Navbar