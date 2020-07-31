import React from 'react';
import axios from 'axios';
import useStyles from '../../Styling';
import Loading from '../Partials/Loading';
import {Link} from 'react-router-dom';
import {TextField, Grid, Paper, Button, Box} from '@material-ui/core';
import {AccountCircle, Security} from '@material-ui/icons';

const LogIn = props =>{

    const classes = useStyles();
    const [loading, setLoading] = React.useState(true);
    const defaultProps = {
        borderColor: 'text.primary',
        m: 1,
        style: { width: '7rem', height: '7rem' },

    };

    const handleLog = event =>{
        event.preventDefault();
        setLoading(!loading);
        const user = {
            name: event.target.Name.value,
            password: event.target.Pwd.value
        }

        axios.post('user/login',user)
        .then(res=>{
            if(res.data.type === 0){
                alert(res.data.message);
            }else if(res.data.type === 1){
                setLoading(!loading);
                props.handleLogin(res.data);
            }
        }).catch(err =>{
            setLoading(!loading);
            alert("Please try again");
        });
    }
    return(
        <div>
            {loading ?
                <div>
                     <Box display="flex" justifyContent="center" className={classes.avatarHolder}>
                    <Box borderRadius="50%" {...defaultProps} className={classes.circleAvatar}/>
                    </Box>
                    <form onSubmit={handleLog}>
                        <Paper className={classes.formPaper}>
                            <Grid container className={classes.formHolder} spacing={6}>
                                <Grid item xs={11} spacing={1} container className={classes.formGrid}>
                                    <Box className='mt-2'>
                                    <AccountCircle className='mt-2'/>
                                    </Box>
                                    <TextField
                                        label='Username'
                                        name='Name'
                                        className={classes.formField}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={11} spacing={1} container className={classes.formGrid}>
                                    <Box className='mt-2'>
                                    <Security className='mt-2'/>
                                    </Box>
                                    <TextField
                                        label='Password'
                                        name='Pwd'
                                        className={classes.formField}
                                        type='password'
                                        required
                                    />
                                </Grid>
                                <Grid item xs={11} spacing={1} container className={classes.formGrid}>
                                    <Button variant='contained' className={classes.formButton} fullWidth type='submit'>Login</Button>
                                </Grid>
                                <Grid item xs={11} spacing={1} container>
                                    <Button color='primary' type='submit'><Link to='signup'>Sign up here for New user</Link></Button>
                                </Grid>
                            </Grid>                    
                        </Paper>
                    </form>
                </div>
            : <Loading/>
            }
           
        </div>
    );

}

export default LogIn;