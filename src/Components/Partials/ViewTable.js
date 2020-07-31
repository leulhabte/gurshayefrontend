import React from 'react';
import axios from 'axios';
import Loading from './Loading';
import useStyles from '../../Styling';
import {Equalizer, CallToAction} from '@material-ui/icons'
import {Table, TableContainer, TableHead, TableBody, TableCell, TableRow, Paper, Container, Grid, Typography} from '@material-ui/core'

const ViewTable = ()=>{
    
    const classes = useStyles();
    const [apiData, setData] = React.useState([]);
    const [totalCount, setCount] = React.useState(0);
    const [loading, setLoading] = React.useState(false);
    const callApi = ()=>{
        axios.get('tips/posts/')
        .then(res=>{
            setData(res.data.data);
            setCount(res.data.Total);
            setLoading(true);
        });
    }

    React.useEffect(()=>{
        callApi();
    },[]);

    return(
        <div>
            {loading ? 
            <Container maxWidth='xl' className={classes.tableHolder}>
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
                    <Grid item md={8} xs={12}>
                        <Paper className={classes.paperHeading2}>
                            <div className="d-flex">
                                <CallToAction className="ml-2"/>
                                <Typography component='h4' className="ml-5">All Predictions can be updated </Typography>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>                
                <TableContainer component={Paper} className={classes.tableContainer}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHead}>Time</TableCell>
                            <TableCell className={classes.tableHead} align='center'>League</TableCell>
                            <TableCell className={classes.tableHead} align='center'>Date</TableCell>
                            <TableCell className={classes.tableHead} align='center'>Match</TableCell>
                            <TableCell className={classes.tableHead}>Tip</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {apiData.map(data=>(
                            <TableRow key={data._id}>
                                <TableCell>{data.time.slice(11,16)}</TableCell>
                                <TableCell align='center'>{data.league}</TableCell>
                                <TableCell align='center'>{data.date.slice(0,10)}</TableCell>
                                <TableCell align='center'>{data.team1} vs {data.team2}</TableCell>
                                <TableCell>{data.tip}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </Container> 
            : <Loading/>}
               
        </div>
    )
}

export default ViewTable;