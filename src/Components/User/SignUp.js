import React from 'react';
import axios from 'axios';
import useStyles from '../../Styling';
import {Link} from 'react-router-dom';
import {TextField, Grid, Paper, Button, Box} from '@material-ui/core';
import {AccountCircle, Security, VerifiedUser} from '@material-ui/icons';

const SignUp =(props)=>{
        const classes = useStyles();
        const defaultProps = {
            borderColor: 'text.primary',
            m: 1,
            style: { width: '7rem', height: '7rem' },
        
        };

        const handleSubmit = event =>{
            event.preventDefault();
            const user = {
                name: event.target.Name.value,
                pwd: event.target.Pwd.value,
                rpwd: event.target.Rpwd.value,
            }
    
            axios.post('user/signup', user)
            .then(res=>{
                if(res.data.type === 0){
                    for(var x in res.data.data){
                        console.log(res.data.data[x]);
                        alert(res.data.data[x]);
                    }
                }
                if(res.data.type === 2){
                    alert("User already Exsist Operation canceled");
                }
                if(res.data.type === 1){
                    props.history.push('/login');
                }
            });
        }

        return (
            <div>
                <Box display="flex" justifyContent="center" className={classes.avatarHolder}>
                <Box borderRadius="50%" {...defaultProps} className={classes.circleAvatar}/>
                </Box>
                <form onSubmit={handleSubmit}>
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
                                <Box className='mt-2'>
                                <VerifiedUser className='mt-2'/>
                                </Box>
                                <TextField
                                    label='Retype Password'
                                    name='Rpwd'
                                    className={classes.formField}
                                    type='password'
                                    required    
                                />
                            </Grid>
                            <Grid item xs={11} spacing={1} container className={classes.formGrid}>
                                <Button variant='contained' className={classes.formButton} fullWidth type='submit'>Create Profile</Button>
                            </Grid>
                            <Grid item xs={11} spacing={1} container>
                                <Button color='primary' type='submit'><Link to='login'>LogIn if you already have an account</Link></Button>
                            </Grid>
                        </Grid>                    
                    </Paper>
                </form>
            </div>
        );
}

export default SignUp;