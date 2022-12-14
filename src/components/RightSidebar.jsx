import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const RightSidebar = () => {
  return (
    <Box sx={{
        flex:2,
        padding:2,
        display:{
            xs:'none',
            sm:'block'
        }
    }}>
        <Box position='fixed' width={300}>
            <Typography variant='h6' fontWeight={100} mb={3}>Online Friends</Typography>
            <AvatarGroup max={6}>
                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
                <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/6.jpg" />
                <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/7.jpg" />
            </AvatarGroup>
            <Typography variant='h6' fontWeight={100} mt={3} mb={2}>Photos</Typography>
            <ImageList cols={3} rowHeight={100} gap={4}>
                <ImageListItem>
                    <img src={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e`} alt={'Breakfast'} loading="lazy"/>
                </ImageListItem>
                <ImageListItem>
                    <img src={`https://images.unsplash.com/photo-1551782450-a2132b4ba21d`} alt={'Burger'} loading="lazy"/>
                </ImageListItem>
                <ImageListItem>
                    <img src={`https://images.unsplash.com/photo-1522770179533-24471fcdba45`} alt={'Camera'} loading="lazy"/>
                </ImageListItem>
            </ImageList>
            <Typography variant='h6' fontWeight={100} mt={3}>Conversations</Typography>


            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Ali Connors
                        </Typography>
                        {" ??? I'll be in your neighborhood doing errands this???"}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Summer BBQ"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            to Scott, Alex, Jennifer
                        </Typography>
                        {" ??? Wish I could come, but I'm out of town this???"}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Sandra Adams
                        </Typography>
                        {' ??? Do you have Paris recommendations? Have you ever???'}
                        </React.Fragment>
                    }
                    />
                </ListItem>
            </List>
            
        </Box>
    </Box>
  )
}

export default RightSidebar