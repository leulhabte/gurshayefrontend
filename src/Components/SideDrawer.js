import React from 'react';
import {AppBar, Hidden, Drawer, 
Divider, List, Toolbar, IconButton, 
Typography, ListItemIcon, ListItemText, ListItem, Box, Tooltip} from '@material-ui/core';
import {Menu, Info, ContactMail, Create, Airplay, InsertChart, Settings, ExitToApp, BorderColor, House} from '@material-ui/icons';
import useStyles from '../Styling';
import {Link} from 'react-router-dom'

const SideDrawer = (props)=>{
    

    const [mobilScreen, setScreen] = React.useState(true);
    const classes = useStyles();

    const handleDrawer = ()=>{
        setScreen(!mobilScreen)
    }

    const drawer = (
        <div>
            <List>
                <Box className={classes.listHeader}><Typography>Menu</Typography></Box>
                <Link className={classes.listText} to='/add' onClick={handleDrawer}>
                <ListItem button>
                    <ListItemIcon><Create className={classes.listIcon}/></ListItemIcon>
                    <ListItemText>Insert Tips</ListItemText>
                </ListItem>
                </Link>
                <Link className={classes.listText} to='/view' onClick={handleDrawer}>
                <ListItem button>
                    <ListItemIcon><Airplay className={classes.listIcon}/></ListItemIcon>
                    <ListItemText>View Tips</ListItemText>
                </ListItem>
                </Link>
                <Link className={classes.listText} to='/manage' onClick={handleDrawer}>
                <ListItem button>
                    <ListItemIcon><Settings className={classes.listIcon}/></ListItemIcon>
                    <ListItemText>Manage Tips</ListItemText>
                </ListItem>
                </Link>
                <Link className={classes.listText} to='/stats' onClick={handleDrawer}>
                <ListItem button>
                    <ListItemIcon><InsertChart className={classes.listIcon}/></ListItemIcon>
                    <ListItemText>Statistics</ListItemText>
                </ListItem>
                </Link>
            </List>
            <Divider className={classes.divider} variant="middle"/>
            <List>
                <Box className={classes.listHeader}><Typography>User Profile</Typography></Box>
                {/* <ListItem>
                    <ListItemIcon><Person className={classes.listIcon}/></ListItemIcon>
                    <ListItemText className={classes.listText}>{props.data}</ListItemText>
                </ListItem> */}
                <Link className={classes.listText} to='/edit' onClick={handleDrawer}>
                    <ListItem button>
                        <ListItemIcon><BorderColor className={classes.listIcon}/></ListItemIcon>
                        <ListItemText className={classes.listText}>Edit Profile</ListItemText>
                    </ListItem>
                </Link>
                <ListItem button onClick={props.handleLogout}>
                    <ListItemIcon><ExitToApp className={classes.listIcon}/></ListItemIcon>
                    <ListItemText className={classes.listText}>Log out</ListItemText>
                </ListItem>
            </List>
        </div>
    );
    
    const header = (
        <div>
            <Box display="flex" justifyContent="center" className={classes.mainHeader} boxShadow={3}>
                <Typography variant="h6">Gurshaye</Typography>
            </Box>
        </div>);
    
    const dashBoard = (
        <div>
            <List>
                <Link className={classes.listText} to='/'>
                    <ListItem>
                        <ListItemIcon><House className={classes.IconColor}/></ListItemIcon>
                        <ListItemText style={{color: 'white'}}>Home Page</ListItemText>
                    </ListItem>
                </Link>

            </List>
            <Divider className={classes.divider} variant="middle"/>
        </div>
    )

    return(
        <div>
            <AppBar position='fixed' className={classes.appBar}>
                <Toolbar>
                    <IconButton className={classes.menuButton} onClick={handleDrawer}><Menu/></IconButton>
                    <Box flexGrow={1} display="flex" flexDirection="row-reverse">
                        <Tooltip title="About Us" arrow><IconButton><Link to='/about'><Info/></Link></IconButton></Tooltip>
                        <Tooltip title="Contact Us" arrow><IconButton><Link to='/contact'><ContactMail/></Link></IconButton></Tooltip>
                    </Box>
                </Toolbar>
            </AppBar>

            <nav className={classes.drawer}>
                <Hidden mdUp>
                    <Drawer
                        variant='temporary'
                        open={mobilScreen}
                        onClose={handleDrawer}
                        classes = {{paper: classes.drawerPaper}}
                    >
                        {header}
                        {dashBoard}
                        {drawer}
                    </Drawer>
                </Hidden>

                <Hidden smDown>
                    <Drawer
                        variant='permanent'
                        open
                        classes = {{paper: classes.drawerPaper}}
                    >
                        {header}
                        {dashBoard}
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}

export default SideDrawer