import React from 'react';
import useStyles from '../../Styling';
import Loading from '../Partials/Loading';
import axios from 'axios';
import {TextField, Grid, Paper, Button, Box, Snackbar} from '@material-ui/core';
import {AccountCircle, Security, VpnKey, VerifiedUser} from '@material-ui/icons';

const ManageUser = (props)=>{

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [loading, setLoading] = React.useState(true);
    const defaultProps = {
        borderColor: 'text.primary',
        m: 1,
        style: { width: '7rem', height: '7rem' },

    };
    const handleChange = (event)=>{
        event.preventDefault();
        setLoading(!loading);
        const userProfile = {
            name: event.target.name.value,
            ppwd: event.target.ppwd.value,
            pwd: event.target.pwd.value,
            rpwd: event.target.rpwd.value
        }
        console.log(props)
        axios.put(`user/userEdit`,
        userProfile)
        .then(res=>{
            if(res.data.type === 2){
                setMessage(res.data.error);
                setLoading(true);
                setOpen(true);
            }
            if(res.data.type === 0){
                if(res.data.error.length === 2){
                    setMessage(`${res.data.error[0]} and ${res.data.error[1]}`);
                    setLoading(true);
                    setOpen(true);
                }else{
                    setMessage(res.data.error[0]);
                    setLoading(true);
                    setOpen(true);
                }
            }
            if(res.data.type === 1){
                setLoading(true);
                props.handleLogOut()
            }
        })
    }

    const handleSnack= ()=>{
        setOpen(false);
    }

    return(
        <div>
            {loading ? 
                <div>
                <Box display="flex" justifyContent="center" className={classes.avatarHolder}>
                <Box borderRadius="50%" {...defaultProps} className={classes.circleAvatar}/>
                </Box>
                <form onSubmit={handleChange}>
                    <Paper className={classes.formPaper}>
                        <Grid container className={classes.formHolder} spacing={6}>
                            <Grid item xs={11} spacing={1} container className={classes.formGrid}>
                                <Box className='mt-2'>
                                <AccountCircle className='mt-2'/>
                                </Box>
                                <TextField
                                    label='New Username'
                                    name='name'
                                    className={classes.formField}
                                    required
                                />
                            </Grid>
                            <Grid item xs={11} spacing={1} container className={classes.formGrid}>
                                <Box className='mt-2'>
                                <Security className='mt-2'/>
                                </Box>
                                <TextField
                                    label='Previous Password'
                                    name='ppwd'
                                    className={classes.formField}
                                    type='password'
                                    required
                                />
                            </Grid>
                            <Grid item xs={11} spacing={1} container className={classes.formGrid}>
                                <Box className='mt-2'>
                                <VpnKey className='mt-2'/>
                                </Box>
                                <TextField
                                    label='New Password'
                                    name='pwd'
                                    className={classes.formField}
                                    type='password'
                                    required
                                />
                            </Grid>
                            <Grid item xs={11} spacing={1} container className={classes.formGrid}>
                                <Box className='mt-2'>
                                <VerifiedUser className='mt-2'/>
                                </Box>
                                <TextField
                                    label='Retype Password'
                                    name='rpwd'
                                    className={classes.formField}
                                    type='password'
                                    required    
                                />
                            </Grid>
                            <Grid item xs={11} spacing={1} container className={classes.formGrid}>
                                <Button variant='contained' className={classes.formButton} fullWidth type='submit'>Update Profile</Button>
                            </Grid>
                        </Grid>                    
                    </Paper>
                </form>
                <Snackbar
                 open={open}
                 onClose={handleSnack}
                 autoHideDuration={5000}
                 message={message}
                 anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                />
            </div>
            : <Loading/>}
        </div>
    );
}

export default ManageUser;