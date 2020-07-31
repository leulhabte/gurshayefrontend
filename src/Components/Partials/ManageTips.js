import React from 'react';
import axios from 'axios';
import Loading from './Loading';
import useStyles from '../../Styling';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {Equalizer, TrackChanges} from '@material-ui/icons';
import {Table, TableContainer, TableHead, TableBody, 
TableCell, TableRow, Paper, Container, Grid, Button, 
Dialog, DialogContent, DialogActions, DialogContentText,
TextField, FormControl, InputLabel, Select, MenuItem, Typography, IconButton, Snackbar} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns'
import 'date-fns';

const ManageTips = (props)=>{
    
    const classes = useStyles();
    const [dataId, setDatas] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [openSnack, handleSnack] = React.useState(false);
    const [openSnack2, handleSnack2] = React.useState(false);
    const [data, setValue] = React.useState({});
    const [tipValue, setTip] = React.useState(1);
    const [dialog, setDialog] = React.useState(false);
    const [apiData, setData] = React.useState([]);
    const [totalCount, setCount] = React.useState(0);
    const [loading, setLoading] = React.useState(false);
    const [macthTime, setTime] = React.useState(new Date('2014-08-18T21:11:54'));
    const [macthDate, setDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const callApi = ()=>{
        axios.get('tips/posts/')
        .then(res=>{
            setData(res.data.data);
            setCount(res.data.Total);
            setLoading(true);
        });
    }

    React.useEffect(()=>{
        callApi()
    });

    const handleDialog = ()=>{
        setDialog(!dialog);
    }

    const handleAction = ()=>{
        axios.delete(`tips/remove/${dataId}`)
        .then(res=>{
            handleDialog();
            props.history.push('/manage');
            handleSnack(!openSnack);
        });
    }

    const handleOpen = ()=>{
        setOpen(!open);
    }

    const handleTipValue = (event)=>{
        setTip(event.target.value);
    }

    const handleTime = time =>{
        setTime(time)
    }

    const handleDate = date =>{
        setDate(date)
    }

    const handlePost = event =>{
        event.preventDefault();

        let tipData = {
            league: event.target.League.value,
            team1: event.target.Team1.value,
            team2: event.target.Team2.value,
            time: macthTime,
            date: macthDate,
            tip: tipValue
        }            
        
        axios.put(`tips/edit/${data._id}`, tipData)
        .then(res=>{
            handleOpen();
            props.history.push('/manage');
            handleSnack2(!openSnack2);
        })
    }


    const actionDialog = (
        <Dialog
            open={open}
            onClose={handleOpen}
        >
            <DialogContent>
                <DialogContentText>Update Information</DialogContentText>
                    <form onSubmit={handlePost}>
                        <Container fixed display='flex' justifyContent='center' className='mt-5'>
                            <Grid container spacing={5} className={classes.inputHolder}>
                                <Grid item md={5} xs={10} >
                                    <TextField label='League' fullWidth name='League' defaultValue={data.league}/>
                                </Grid>
                                <Grid item md={5} xs={10}>
                                    <FormControl fullWidth>
                                        <InputLabel>Tips</InputLabel>
                                        <Select
                                            value={data.tip}
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
                                <Grid item md={5} xs={10}>
                                    <TextField label='Team 1' fullWidth name='Team1' defaultValue={data.team1}/>
                                </Grid>
                                <Grid item md={5} xs={10}>
                                    <TextField label='Team 2' fullWidth name='Team2' defaultValue={data.team2}/>
                                </Grid>
                                <Grid item md={5} xs={10}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardTimePicker
                                                fullWidth
                                                label='Time Picker'
                                                value={data.time}
                                                onChange={handleTime}
                                            />
                                    </MuiPickersUtilsProvider>        
                                </Grid>
                                <Grid item md={5} xs={10}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardDatePicker
                                                fullWidth
                                                label='Date Picker'
                                                value={data.date}
                                                onChange={handleDate}
                                            />
                                    </MuiPickersUtilsProvider>   
                                </Grid>
                                <Grid item xs={10}>
                                <Button variant='contained' fullWidth type='submit' className={classes.submitBtn}>Update Information</Button>
                                </Grid>
                            </Grid> 
                        </Container>
                    </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleOpen}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )

    return(
        <div>
            {loading ? 
            <Container maxWidth='lg' className={classes.tableHolder}>
               <Grid container spacing={3} className={classes.subHeading}>
                    <Grid item md={4} xs={12}>
                        <Paper className={classes.paperHeading}>
                            <div className="d-flex">
                                <Equalizer className="ml-2"/>
                                <Typography component='h4' className="ml-5">Total Prediction</Typography>
                            </div>
                            <Typography component='h4' className="mr-4">{totalCount}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Paper className={classes.paperHeading2}>
                            <div className="d-flex">
                                <TrackChanges className="ml-2"/>
                                <Typography component='h4' className="ml-5">Manage inserted tips</Typography>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>                  
                <TableContainer component={Paper} className={classes.tableContainer}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHead}>Time</TableCell>
                            <TableCell className={classes.tableHead} align='left'>League</TableCell>
                            <TableCell className={classes.tableHead} align='center'>Date</TableCell>
                            <TableCell className={classes.tableHead} align='center'>Match</TableCell>
                            <TableCell className={classes.tableHead}>Tip</TableCell>
                            <TableCell className={classes.tableHead} align='center'>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {apiData.map(data=>(
                            <TableRow key={data._id}>
                                <TableCell>{data.time.slice(11,16)}</TableCell>
                                <TableCell align='left'>{data.league}</TableCell>
                                <TableCell align='center'>{data.date.slice(0,10)}</TableCell>
                                <TableCell align='center'>{data.team1} vs {data.team2}</TableCell>
                                <TableCell>{data.tip}</TableCell>
                                <TableCell align='center'>
                                    <Grid container spacing={0} className={classes.inputHolder}>
                                        <Grid item md={6} xs={10}>
                                            <IconButton color='primary' variant='contained' onClick={()=>{setValue(data); handleOpen()}}><EditIcon/></IconButton>
                                            {actionDialog}
                                        </Grid>
                                        <Grid item md={6} xs={10}>
                                            <IconButton color='secondary' variant='contained' onClick={()=>{setDatas(data._id); handleDialog()}} ><DeleteIcon/></IconButton>
                                            <Dialog
                                                open={dialog}
                                                onClose={handleDialog}
                                            >
                                                <DialogContent>
                                                    <DialogContentText>Are you sure to remove this tip?</DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button color='primary' onClick={handleAction}>Yes</Button>
                                                    <Button color='primary' onClick={handleDialog}>No</Button>
                                                </DialogActions>
                                            </Dialog>
                                        </Grid>
                                    </Grid>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </TableContainer>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center'
                    }}
                        open={openSnack}
                        onClose={handleSnack}
                        message="Successfully Deleted"
                        autoHideDuration={4000}
                >
            </Snackbar>
            <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                    }}
                        open={openSnack2}
                        onClose={handleSnack2}
                        message="Successfully Updated"
                        autoHideDuration={4000}
                >
            </Snackbar>
            </Container> 
            : <Loading/>}
               
        </div>
    )
}

export default withRouter(ManageTips);