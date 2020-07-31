import React from 'react';
import axios from 'axios';
import {Button, TextField, FormControl, InputLabel, Snackbar, Grid, Container, Select, MenuItem, Card, CardContent} from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import useStyles from '../../Styling';
import DateFnsUtils from '@date-io/date-fns'
import 'date-fns';
import Heading from './Heading'

const  FormFill = ()=>{
    const [open, setOpen] = React.useState(false);
    const [tipValue, setTip] = React.useState(1);
    const [macthTime, setTime] = React.useState(new Date('2014-08-18T21:11:54'));
    const [macthDate, setDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleTipValue = (event)=>{
        setTip(event.target.value);
    }

    const handleTime = time =>{
        setTime(time)
    }

    const handleDate = date =>{
        setDate(date)
    }

    const handleOpen = ()=>{
        setOpen(!open)
    }

    const handleSubmit = event=>{
        event.preventDefault();
        let tipData = {
            league: event.target.League.value,
            team1: event.target.Team1.value,
            team2: event.target.Team2.value,
            time: macthTime,
            date: macthDate,
            tip: tipValue
        }
        axios.post('tips/save/', tipData)
        .then(res=>{
            console.log(res);
        });
        setOpen(true);
    }

        const classes = useStyles();
        return (
            <div>
                <Heading title='Gurshaye Add Tips'/>
                <Card>
                    <CardContent>
                    <Container maxWidth='xl' className='mt-5'>
                        <form onSubmit={handleSubmit} style={{padding: '0'}}>
                                <Grid container spacing={6} className={classes.inputHolder}>
                                    <Grid item md={6} xs={10} >
                                        <TextField label='League' fullWidth name='League'/>
                                    </Grid>
                                    <Grid item md={6} xs={10}>
                                        <FormControl fullWidth>
                                            <InputLabel>Tips</InputLabel>
                                            <Select
                                                value={tipValue}
                                                onChange={handleTipValue}
                                            >
                                                <MenuItem value={'1'} fullWidth>1</MenuItem>
                                                <MenuItem value={'1x'}>1x</MenuItem>
                                                <MenuItem value={'2'}>2</MenuItem>
                                                <MenuItem value={'2x'}>2x</MenuItem>
                                                <MenuItem value={'Over 2.5'}>Over 2.5</MenuItem>
                                                <MenuItem value={'Under 2.5'}>Over 2.5</MenuItem>
                                                <MenuItem value={'BTTS'}>BTTS</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={6} xs={10}>
                                        <TextField label='Team 1' fullWidth name='Team1'/>
                                    </Grid>
                                    <Grid item md={6} xs={10}>
                                        <TextField label='Team 2' fullWidth name='Team2'/>
                                    </Grid>
                                    <Grid item md={6} xs={10}>
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <KeyboardTimePicker
                                                    fullWidth
                                                    label='Time Picker'
                                                    value={macthTime}
                                                    onChange={handleTime}
                                                />
                                        </MuiPickersUtilsProvider>        
                                    </Grid>
                                    <Grid item md={6} xs={10}>
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <KeyboardDatePicker
                                                    fullWidth
                                                    label='Date Picker'
                                                    value={macthDate}
                                                    onChange={handleDate}
                                                />
                                        </MuiPickersUtilsProvider>   
                                    </Grid>
                                    <Grid item md={12} xs={10}>
                                    <Button variant='contained' fullWidth type='submit' className={classes.submitBtn}>Save tip</Button>
                                    </Grid>
                                </Grid> 
                        </form>
                        </Container>
                        </CardContent>
                </Card>
                
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                    }}
                    open={open}
                    onClose={handleOpen}
                    message="Successfully Inserted"
                    autoHideDuration={4000}
                >

                </Snackbar>
            </div>
        );
    }

export default FormFill;